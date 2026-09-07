function SearchBar({ search, onSearch }) {
  return (
    <div className="mb-4 flex items-center gap-2 rounded border bg-white px-3 py-2">
      <span>🔍</span>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search Bakery..."
        aria-label="Search pastries"
        className="w-full outline-none"
      />
    </div>
  );
}
export default SearchBar;
