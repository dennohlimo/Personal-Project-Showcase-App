import { Link } from "react-router";

function PastryCard({ pastry }) {
  return (
    <Link to={`/shop/${pastry.id}`}>
      <h2>{pastry.name}</h2>
      <p>{pastry.description}</p>
      <p>Price: ${pastry.price}</p>
    </Link>
  );
}

export default PastryCard;
