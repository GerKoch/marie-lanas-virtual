"use client"

import CardWorks from "@/components/cards/CardWorks"
import { worksData } from "@/seed/worksSeed"
import FilterProducts from "@/components/FilterProducts/FilterProducts"
import { useState } from "react"

const Trabajos = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const filteredProducts = selectedBrand ? worksData.filter((product) => product.category.toLocaleLowerCase() === selectedBrand.toLocaleLowerCase()) : worksData;

  const brands = ["Mujer", "Niño", "Bebé"]

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="w-screen flex justify-center bg-white font-medium text-2xl lg:text-2xl px-10 py-3 lg:px-16 drop-shadow-md">
        Nuestros trabajos
      </h2>
      <div className="w-full max-w-7xl p-6 lg:p-16 flex flex-col lg:flex-row lg:gap-8">
        <FilterProducts
          categories={brands}
          selectedCategory={selectedBrand}
          setSelectedCategory={setSelectedBrand}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:p-0 place-items-center drop-shadow-md lg:w-[900px]">
          {filteredProducts.map((product, index) => (
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
