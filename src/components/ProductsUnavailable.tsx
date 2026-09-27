import { CloudOff, RotateCw } from "lucide-react";

interface ProductsUnavailableProps {
  failed?: boolean;
}

// Empty / error state for product listings
export default function ProductsUnavailable({ failed }: ProductsUnavailableProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-20 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-crema text-caffia">
        <CloudOff size={24} strokeWidth={1.75} />
      </span>
      <h2 className="mt-5 font-heading text-2xl text-espresso">
        {failed ? "We couldn't load our coffees" : "No products yet"}
      </h2>
      <p className="mt-2 text-roast">
        {failed
          ? "Something went wrong on our side. Please try again in a moment."
          : "Fresh roasts are on their way. Please check back soon."}
      </p>
      {failed && (
        // Full reload so the server re-fetches from the API
        <a
          href=""
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-caffia px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-caffia-dark"
        >
          <RotateCw size={15} /> Try again
        </a>
      )}
    </div>
  );
}
