import PastryCard from "./PastryCard"

function Shop({pastries}){
  return (
    <div>
      {pastries.map((p) => (
        <PastryCard key={p.id} pastry={p} />
      ))}
    </div>
  );
}
export default Shop