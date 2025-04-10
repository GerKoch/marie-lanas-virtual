import Image from "next/image";
import ProductPrice from "../DescuentoProducto/ProductPriceProps";
import AddToCartButton from "../cart/AddToCartButton";

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
    <div className="relative hover:bg-gray-100 bg-white w-full rounded-lg overflow-hidden shadow-md">
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 bg-black text-white py-1 px-4 rounded-l-full text-xl shadow-sm shadow-black/50">
        <p>10% OFF</p>
      </div>
      <div className="flex flex-col justify-start items-center space-y-2 p-5">
        <h2 className="text-center text-black text-xl uppercase">
          {title}
        </h2>
        <p className="text-black text-sm uppercase">
          {description}
        </p>
        <div className="font-bold text-base flex gap-4">
          {price > 0 ? (
            <ProductPrice price={price} />
          ) : (
            <p className="text-gary-500 font-semibold text-sm">Consultar precio</p>
          )
          }
        </div>
        <div>
          <AddToCartButton id={title} name={title} price={price} />
        </div>
      </div>
    </div>
  )
}

export default CardWorks