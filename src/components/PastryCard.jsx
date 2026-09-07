import { Link } from "react-router";

function PastryCard({ pastry }) {
  return (
    <Link
      to={`/shop/${pastry.id}`}
      className="block rounded bg-white p-4 shadow hover:shadow-md"
    >
      <h2 className="text-lg font-bold">{pastry.name}</h2>
      <p className="text-sm text-gray-600">{pastry.description}</p>
      <p className="mt-2 font-bold text-amber-700">
        Price: ${pastry.price.toFixed(2)}
      </p>
    </Link>
  );
}

export default PastryCard;
