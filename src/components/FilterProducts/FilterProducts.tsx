import { Dispatch, SetStateAction } from "react"

interface FilterProps {
  categories: string[]
  selectedCategory: string | null
  setSelectedCategory: Dispatch<SetStateAction<string | null>>
}

const FilterProducts = ({ categories, selectedCategory, setSelectedCategory }: FilterProps) => {
  return (
    <div className="w-full lg:w-[250px] bg-gray-100 p-5 mb-8 lg:mb-0 rounded-md shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Filtrar por categoría</h3>
      <div className="flex flex-wrap lg:flex-col gap-3">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition ${selectedCategory === null
            ? "bg-pink-400 text-white"
            : "bg-white text-black hover:bg-pink-100"
            }`}
        >
          Ver todos
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium capitalize transition ${selectedCategory?.toLowerCase() === cat.toLowerCase()
              ? "bg-pink-400 text-white"
              : "bg-white text-black hover:bg-pink-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterProducts
