import Image from "next/image";
import ProductPrice from "../DescuentoProducto/ProductPriceProps ";


interface Props {
  img: string;
  title: string;
  description: string;
  waist: string;
  price: number;
}


const CardWorks = ({ title, description, price, img }: Props) => {
  return (
    <div className="relative hover:bg bg-white">
      <div>
        <Image
          src={img}
          alt={title}
          width={3000}
          height={3000}
          className="object-contain w-full h-full lg:h-full rounded-t-sm bg-white"
        />
        <div className="absolute top-0 right-0 bg-black text-white py-1 px-4 rounded-l-full text-xl shadow-sm shadow-black/50">
          <p>10% OFF</p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center space-y-2 p-5 border-pink-300 h-full">
        <h2 className="flex items-center justify-center text-center text-black text-xl uppercase">{title}</h2>
        <p className="text-black text-sm uppercase">{description}</p>
        <div className="font-bold text-base flex gap-4">
          <ProductPrice price={price} />
        </div>
        <button className="bg-pink-100 hover:bg-pink-300 text-black font-bolder py-2 px-4 w-48 rounded-lg border-b-2">
          Ver prenda
        </button>
      </div>


    </div>
  )
}

export default CardWorks