import { Link, useParams } from "react-router";

function PastryDetail({ pastries }) {
  const { id } = useParams();
  const pastry = pastries.find((p) => String(p.id) === id);
  if (!pastry) {
    return (
      <p>
        Item not found. <Link to="/shop">Back to shop</Link>
      </p>
    );
  }
  return (
    <div>
      <Link to="/shop">← Back to shop</Link>
      <h2>{pastry.category}</h2>
      <h1>{pastry.name}</h1>
      <p>{pastry.description}</p>
      <p>Price: ${pastry.price.toFixed(2)}</p>
      {<p>⚠️ {pastry.allergens}</p>}
      {
        <div>
          <h3>Ingredients</h3>
          <p>{pastry.ingredients.join(", ")}</p>
        </div>
      }
    </div>
  );
}
export default PastryDetail;
