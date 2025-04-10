"use client"

import CardProducts from "@/components/CardProducts/CardProducts"
import FilterProducts from "@/components/FilterProducts/FilterProducts";
import { hilosData } from "@/seed/hilosSeed"
import { useState } from "react";

const Hilos = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const filteredProducts = selectedBrand ? hilosData.filter((product) => product.title.toLocaleLowerCase().includes(selectedBrand.toLocaleLowerCase())) : hilosData;

  const brands = ["LHO", "Mia"]

  return (
    <div className="flex flex-col justify-start items-center">
      <h2 className="w-screen flex justify-center bg-white font-medium text-2xl py-3 drop-shadow-md">
        Hilos
      </h2>
      <div className="w-full max-w-7xl p-6 lg:p-16 flex flex-col lg:flex-row lg:gap-8">
        <FilterProducts
          categories={brands}
          selectedCategory={selectedBrand}
          setSelectedCategory={setSelectedBrand}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 lg:p-0 place-items-center drop-shadow-md lg:w-[900px]">
          {filteredProducts.map((accessorie, index) => (
            <CardProducts
              key={index}
              img={accessorie.image}
              title={accessorie.title}
              price={accessorie.price}
              description={accessorie.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hilos
