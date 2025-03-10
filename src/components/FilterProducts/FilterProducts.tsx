import { Dispatch, SetStateAction } from "react";

interface FilterProps {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>
}

const FilterProducts = ({ categories, selectedCategory, setSelectedCategory }: FilterProps) => {
  return (
    <div className="w-full lg:w-[320px] bg-gray-100 p-5 mb-8 lg:mb-0 rounded-sm">
      <h3 className="text-xl border-b-2 border-slate-300 pb-2 mb-4">
        Categorías
      </h3>
      <ul className="text-lg">
        {categories.map(category => (
          <li
            key={category}
            className={`pt-4 hover:text-pink-500 cursor-pointer ${selectedCategory === category ? "text-pink-500" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterProducts