import NextAuth from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";

type LoginResponse = {
    id: string,
    name: string;
    email: string;
    role: string;
    accessToken: string;
}

const handler = NextAuth({
    session: { strategy: 'jwt' },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(Credentials) {
                const email = Credentials.email;
                const password = Credentials.password;

                if (!email || !password) return null;

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                if (!res.ok) return null
                const data: LoginResponse = await res.json();

                // return token + user
                return {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    role: data.role,
                    accessToken: data.accessToken,
                } as any;
            }

        })
    ],

    callbacks:{
        async jwt({token, user}){
            if(user){
                token.id=(user as any).id;
                token.name=(user as any).name;
                token.email=(user as any).email;
                token.role=(user as any).role;
                token.accessToken=(user as any).accessToken;
            }
            return token;
        },
        async session({session, token}) {
            (session as any).user = (session as any).user ?? {};
            (session as any).user.id = token.id;
            (session as any).user.role = token.role;
            return session;
        }
    },
    pages:{
        signIn: '/login'
    },
})

export {handler as GET, handler as POST}
