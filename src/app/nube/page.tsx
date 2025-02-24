import { initialData } from "@/seed/seed"
import CardWools from "@/components/cardWools/CardWools"

const NubePage = () => {
  const productosNube = initialData.products.filter(producto => producto.title === "Nube")

  return (
    <div>
      <h2 className="text-center text-2xl lg:text-5xl p-4 drop-shadow-md">Productos Nube</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 p-10 lg:p-16">
        {productosNube.length > 0 ? (
          productosNube.map((producto, index) => (
            <CardWools
              key={index}
              image={producto.image}
              title={producto.title}
              description={producto.description}
            />
          ))
        ) : (
          <p>No se encontraron productos Nube.</p>
        )}
      </div>
    </div>
  );
};

export default NubePage


