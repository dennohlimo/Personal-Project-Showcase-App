function SearchBar({ search, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search Bakery..."
        aria-label="Search pastries"
      />
    </div>
  );
}
export default SearchBar;
