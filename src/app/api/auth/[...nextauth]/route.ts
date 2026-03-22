import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type LoginUser = {
    id?: string;
    _id?: string;
    name?: string;
    email?: string;
    phone?: string;
    role?: string;
    accessToken?: string;
    token?: string;
};

type LoginResponse =
    | LoginUser
    | {
          user?: LoginUser;
          accessToken?: string;
          token?: string;
      };

export const authOptions: NextAuthOptions = {
    session: { strategy: 'jwt' },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(Credentials) {
                const email = Credentials?.email;
                const password = Credentials?.password;

                if (!email || !password) return null;

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                if (!res.ok) return null;
                const data: LoginResponse = await res.json();
                const userData: LoginUser = "user" in data && data.user
                    ? data.user
                    : (data as LoginUser);
                const userId = userData.id ?? userData._id;
                const accessToken =
                    ("accessToken" in data && data.accessToken) ||
                    ("token" in data && data.token) ||
                    userData.accessToken ||
                    userData.token;

                if (!userId) return null;

                // return token + user
                return {
                    id: userId,
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone,
                    role: userData.role,
                    accessToken,
                } as any;
            }

        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = (user as any).id;
                token.name = (user as any).name;
                token.email = (user as any).email;
                token.phone = (user as any).phone;
                token.role = (user as any).role;
                token.accessToken = (user as any).accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            (session as any).user = (session as any).user ?? {};
            (session as any).user.id = token.id;
            (session as any).user.name = token.name;
            (session as any).user.email = token.email;
            (session as any).user.phone = token.phone;
            (session as any).user.role = token.role;
            return session;
        }
    },
    pages: {
        signIn: '/login'
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
