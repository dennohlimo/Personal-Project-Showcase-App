import { Link } from "react-router";

function Home() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center bg-linear-to-br from-amber-700 to-amber-800 text-center">
      <h1 className="text-3xl font-bold text-amber-50 md:text-4xl">
        The go to store for your bakery needs
      </h1>
      <p className="mt-2 text-lg text-amber-200">
        Discover fresh baked goods made the traditional way
      </p>
      <Link
        to="/shop"
        className="mt-4 inline-block rounded bg-amber-600 px-6 py-2 font-semibold text-white hover:bg-amber-700"
      >
        Shop Now
      </Link>
    </div>
  );
}
export default Home;
