import Image from "next/image"
import AddToCartButton from "../cart/AddToCartButton"

interface Props {
  img: string;
  title: string;
  price: number;
}

const CardProducts = ({ title, img, price }: Props) => {
  return (
    <div className="flex flex-col mx-auto hover:bg-gray-100 bg-white w-full rounded-sm shadow-lg overflow-hidden">
      <div>
        <Image
          src={img}
          alt={title}
          width={300}
          height={400}
          className="object-cover w-full h-[350px] rounded-t-sm"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-2 py-3">
        <h2 className="flex items-center justify-center text-center text-black text-lg">{title}</h2>
        <p className="text-gray-700 font-semibold">${price}</p>

        <AddToCartButton id={title} name={title} price={price} />
      </div>
    </div>
  )
}

export default CardProducts
