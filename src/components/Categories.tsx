import data from "../assets/data/data.json";

export default function Categories() {
  const categories = data.categories;

  return (
    <div className="mt-9">
      <h1 className="pb-3 text-xl font-bold">Top catégories</h1>
      <div className="hide-scrollbar flex gap-3 overflow-scroll">
        {categories.map((category) => {
          return (
            <div key={category.id} className="relative shrink-0">
              <div className="h-32 w-32 overflow-hidden rounded-xl bg-amber-300">
                <img
                  src={category.image}
                  alt={`illustration de la catégorie ${category.title}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="relative bottom-9 z-10 mt-2 text-center text-sm text-white">
                {category.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
