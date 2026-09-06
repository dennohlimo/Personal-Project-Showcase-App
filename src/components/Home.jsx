import { Link } from "react-router";

function Home() {
  return (
    <div>
      <div>
        <h1>The go to store for your bakery needs</h1>
        <p>Discover fresh baked goods made the traditional way</p>
        <Link to="/shop">Shop Now</Link>
      </div>
    </div>
  );
}
export default Home;
