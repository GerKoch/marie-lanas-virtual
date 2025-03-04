import CardWools from "@/components/cardWools/CardWools"
import { initialData } from "@/seed/seed"
import Link from "next/link"

const lanasData = initialData.products

const CardProducts = () => {
  return (
    <div>
      <h2 className="flex justify-center bg-stone-50 font-medium text-2xl lg:text-5xl p-4 drop-shadow-md">Lanas</h2>
      <div className="flex flex-row pl-7 pt-16">
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-16 p-10 lg:p-16 lg:pt-0 drop-shadow-md">
          {lanasData.map((accessorie, index) => (
            <CardWools
              key={index}
              image={accessorie.image}
              title={accessorie.title}
              description={accessorie.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardProducts;
