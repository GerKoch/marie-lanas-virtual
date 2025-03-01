import CardProducts from "@/components/CardProducts/CardProducts"
import { initialData } from "@/seed/seed"


const lanasData = initialData.products;


const Lanas = () => {

  return (
    <div>
      <h2 className="flex justify-start bg-white font-medium text-2xl lg:text-2xl px-10 pt-3 lg:px-16 drop-shadow-md">Lanas</h2>
      <div className="flex flex-row justify-center pl-7 pt-16">
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-16 p-10 lg:p-16 lg:pt-0 drop-shadow-md">
          {lanasData.map((accessorie, index) => (
            <CardProducts
              key={index}
              img={accessorie.image}
              title={accessorie.title}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Lanas
