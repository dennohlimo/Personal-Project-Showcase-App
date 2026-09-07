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
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Our Bakery Selection</h1>
      <div>
        <SearchBar search={search} onSearch={setSearch} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <PastryCard key={p.id} pastry={p} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 text-center text-gray-500">
          No items found matching your search
        </p>
      )}
    </div>
  );
}
export default Shop;
