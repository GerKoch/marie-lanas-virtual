
import Image from "next/image";


interface Props {
  id: number;
  img: string;
  title: string;
  description: string;
  waist: string;
  price: number;
}


const CardOffers = ({ title, description, img }: Props) => {
  return (
    <div className="relative hover:bg bg-white">
      <Image
        src={img}
        alt={title}
        width={3000}
        height={3000}
        className="object-contain w-full h-full lg:h-full rounded-t-sm bg-white"
      />
      <div className="flex flex-col justify-start items-center space-y-2 p-5 border-pink-300 h-full">
        <h2 className="flex items-center justify-center text-center text-black text-xl uppercase">{title}</h2>
        <p className="text-black text-sm uppercase">{description}</p>
      </div>
    </div>
  )
}

export default CardOffers