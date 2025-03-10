"use client"

import CardProducts from "@/components/CardProducts/CardProducts"
import { initialData } from "@/seed/seed"
import { useState } from "react"

const lanasData = initialData.products;

const Lanas = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const filteredProducts = selectedBrand ? lanasData.filter((product) => product.title === selectedBrand) : lanasData;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="w-screen flex justify-center bg-white font-medium text-2xl py-3 drop-shadow-md">
        Lanas
      </h2>
      <div className="w-full max-w-7xl p-6 lg:p-16 flex flex-col lg:flex-row lg:gap-8">
        <div className="w-full lg:w-[320px] bg-gray-100 p-5 mb-8 lg:mb-0 rounded-sm">
          <h3 className="text-xl border-b-2 border-slate-300 pb-2 mb-4">
            Marcas
          </h3>
          <ul className="text-lg">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:p-0 lg:w-[800px]">
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
