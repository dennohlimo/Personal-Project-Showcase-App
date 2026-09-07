//Provides more information about a specific pastry item, including its name, description, price, allergens, and ingredients. It also includes a link to navigate back to the shop page.

import { Link, useParams } from "react-router";

function PastryDetail({ pastries }) {
  const { id } = useParams();
  const pastry = pastries.find((p) => String(p.id) === id);

  return (
    <div className="p-4">
      <Link to="/shop" className="text-sm text-gray-500 hover:text-gray-700">
        ← Back to shop
      </Link>

      <div className="mt-3 max-w-md rounded bg-white p-4 shadow">
        <span className="font-mono text-xs text-amber-700">
          {pastry.category}
        </span>
        <h1 className="text-2xl font-bold">{pastry.name}</h1>
        <p className="text-gray-600">{pastry.description}</p>
        <p className="mt-2 text-xl font-bold text-amber-700">
          Price: ${pastry.price.toFixed(2)}
        </p>
        <p className="mt-3 text-sm text-gray-500">⚠️ {pastry.allergens}</p>
        <div className="mt-2">
          <h3 className="text-sm font-semibold">Ingredients</h3>
          <p className="text-sm text-gray-600">{pastry.ingredients}</p>
        </div>
      </div>
    </div>
  );
}
export default PastryDetail;
