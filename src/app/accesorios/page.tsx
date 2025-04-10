import CardProducts from "@/components/CardProducts/CardProducts"
import { accessoriesData } from "@/seed/accessoriesSeed"

const Accesorios = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <h2 className="w-screen flex justify-center bg-white font-medium text-2xl py-3 drop-shadow-md">
        Accesorios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 lg:p-16 lg:py-[69px]">
        {accessoriesData.map((accessorie, index) => (
          <CardProducts
            key={index}
            img={accessorie.image}
            title={accessorie.title}
            price={accessorie.price}
            description={accessorie.description} />
        ))}
      </div>
    </div>
  )
}

export default Accesorios




