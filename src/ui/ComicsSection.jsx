import Cards from "../components/Cards";
export default function ComicsSection() {
  return (
    <div className="grid grid-cols-6 gap-4 p-16 gridcols ">
      <Cards />
      <button>Load More</button>
    </div>
  );
}
