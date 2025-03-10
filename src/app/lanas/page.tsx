"use client"

import CardProducts from "@/components/CardProducts/CardProducts"
import { initialData } from "@/seed/seed"
import { useState } from "react"
import FilterProducts from "@/components/FilterProducts/FilterProducts"

const lanasData = initialData.products;

const Lanas = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const filteredProducts = selectedBrand ? lanasData.filter((product) => product.title.toLocaleLowerCase() === selectedBrand.toLocaleLowerCase()) : lanasData;

  const brands = ["Nube", "Mia", "Cisne Super bebe", "Madeja Nube"]

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="w-screen flex justify-center bg-white font-medium text-2xl py-3 drop-shadow-md">
        Lanas
      </h2>
      <div className="w-full max-w-7xl p-6 lg:p-16 flex flex-col lg:flex-row lg:gap-8">
        <FilterProducts
          categories={brands}
          selectedCategory={selectedBrand}
          setSelectedCategory={setSelectedBrand}
        />
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
