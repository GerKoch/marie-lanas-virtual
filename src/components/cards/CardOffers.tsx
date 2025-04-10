import Image from "next/image"
import AddToCartButton from "../cart/AddToCartButton"

interface Props {
  id: number;
  img: string;
  title: string;
  description: string;
  waist: string;
  price: number;
}

const CardOffers = ({ title, description, img, price }: Props) => {
  return (
    <div className="relative bg-white w-full max-w-[300px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]">
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <div className="flex flex-col justify-start items-center space-y-2 p-4">
        <h2 className="text-center text-black text-lg font-semibold uppercase">
          {title}
        </h2>
        <h1>Color disponible en imagen</h1>
        <p className="flex text-center p-2">{description}</p>
        <p className="text-gray-700 font-semibold">${price}</p>

        <AddToCartButton id={title} name={title} price={price} />
      </div>
    </div>
  )
}

export default CardOffers