import { useState } from "react";
import PastryCard from "./PastryCard";
import SearchBar from "./SearchBar.jsx";

function Shop({ pastries }) {
  const [search, setSearch] = useState("");

  const filtered = pastries.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div>
        <SearchBar search={search} onSearch={setSearch} />
      </div>
      <div>
        {filtered.map((p) => (
          <PastryCard key={p.id} pastry={p} />
        ))}
      </div>
    </div>
  );
}
export default Shop;
