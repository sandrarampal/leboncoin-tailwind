import useFavoritesContext from "../hooks/useFavoritesContext";

export default function Modal() {
  const { fav, total } = useFavoritesContext();

  return (
    <div
      className="fixed top-1/2 left-1/2 z-50 max-h-[80vh] w-11/12 max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-6 opacity-100 shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="mb-5 text-xl font-bold">Mes favoris</h1>
      <div>
        {fav.map((item) => (
          <div key={item.id} className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 rounded-xl object-cover"
              />

              <h2 className="font-bold">{item.title}</h2>
            </div>
            <p className="font-semibold text-gray-800">{item.price} €</p>
          </div>
        ))}
        <div className="flex justify-between font-bold">
          <p>Prix total:</p>
          <p>{total} €</p>
        </div>
      </div>
    </div>
  );
}
