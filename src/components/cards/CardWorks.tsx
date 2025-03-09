import Image from "next/image";
import ProductPrice from "../DescuentoProducto/ProductPriceProps";

interface Props {
  id: number;
  img: string;
  title: string;
  description: string;
  waist: string;
  price: number;
}

const CardWorks = ({ img, title, description, price }: Props) => {
  return (
    <div className="relative hover:bg-gray-100 bg-white w-full h-full">
      <div className="relative w-full h-[500px]">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-0 right-0 bg-black text-white py-1 px-4 rounded-l-full text-xl shadow-sm shadow-black/50">
        <p>10% OFF</p>
      </div>
      <div className="flex flex-col justify-start items-center space-y-2 p-5 border-pink-300 h-32">
        <h2 className="flex items-center justify-center text-center text-black text-xl uppercase">
          {title}
        </h2>
        <p className="text-black text-sm uppercase">
          {description}
        </p>
        <div className="font-bold text-base flex gap-4">
          <ProductPrice price={price} />
        </div>
      </div>
    </div>
  )
}

export default CardWorks