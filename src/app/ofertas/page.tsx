import CardOffers from "@/components/cards/CardOffers"
import { ofertasData } from "@/seed/ofertasSeed"

const Ofertas = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <h2 className="w-screen flex justify-center bg-white font-medium text-2xl py-3 drop-shadow-md">
        Nuestras Ofertas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 lg:p-16 lg:py-[69px]">
        {ofertasData.map((accessorie, index) => (
          <CardOffers
            key={index}
            img={accessorie.image}
            title={accessorie.title}
            description={accessorie.description}
            price={accessorie.price}
            waist={""}
            id={0}
          />
        ))}
      </div>
    </div>
  )
}

export default Ofertas