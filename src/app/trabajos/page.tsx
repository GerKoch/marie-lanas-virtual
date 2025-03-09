import CardWorks from "@/components/cards/CardWorks"
import { worksData } from "@/seed/worksSeed"

const Trabajos = () => {
  return (
    <div>
      <div>
        <h2 className="flex justify-start bg-white font-medium text-2xl lg:text-2xl px-10 py-3 lg:px-16 drop-shadow-md">
          Nuestros trabajos
        </h2>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-16 pt-16 pb-16 p-2 lg:p-16 drop-shadow-md">
          {worksData.map((product, index) => (
            <CardWorks
              key={index}
              img={product.image}
              title={product.title}
              description={product.description}
              waist={product.waist}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trabajos
