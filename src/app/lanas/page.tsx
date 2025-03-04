"use client"

import CardProducts from "@/components/CardProducts/CardProducts"
import { initialData } from "@/seed/seed"
import { useState } from "react"


const lanasData = initialData.products;


const Lanas = () => {

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

  const filteredProducts = selectedBrand ? lanasData.filter((product) => product.title === selectedBrand) : lanasData;

  return (
    <div>
      <h2 className="flex justify-start bg-white font-medium text-2xl lg:text-2xl px-10 py-3 lg:px-16 drop-shadow-md">Lanas</h2>
      <div className="flex flex-col lg:flex-row justify-center p-1 pt-16">

        <div className="w-[320px] h-full bg-gray-100 p-5 mx-10">
          <h3 className="text-xl border-b-2 border-slate-300">Marcas</h3>
          <ul className="text-xl">
            <li className="pt-4 hover:text-pink-500 cursor-pointer" onClick={() => setSelectedBrand("Nube")}>
              Nube
            </li>
            <li className="pt-4 hover:text-pink-500 cursor-pointer" onClick={() => setSelectedBrand("Mia")}>
              Mía
            </li>
            <li className="pt-4 hover:text-pink-500 cursor-pointer" onClick={() => setSelectedBrand("Cisne Super bebe")}>
              Cisne Super Bebe
            </li>
            <li className="pt-4 hover:text-pink-500 cursor-pointer" onClick={() => setSelectedBrand("Madeja Nube")}>
              Madeja Nube
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-16 p-10 lg:p-16 lg:pt-0 drop-shadow-md">
          {filteredProducts.map((accessorie, index) => (
            <CardProducts
              key={index}
              img={accessorie.image}
              title={accessorie.title}
            />
          ))}
        </div>

      </div>
    </div >
  )
}

export default Lanas
