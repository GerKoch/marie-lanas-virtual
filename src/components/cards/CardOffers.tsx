
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
    <div className="flex flex-col mx-auto hover:bg bg-white w-full rounded">
      <Image
        src={img}
        alt={title}
        width={200}
        height={300}
        className="object-cover w-full h-[350px] rounded-t"
      />
      <div className="flex flex-col justify-center items-center space-y-2 p-2 h-full">
        <h2 className="flex items-center justify-center text-center text-black text-xl uppercase">{title}</h2>
        <h1>Color disponible en imagen</h1>
        <p className="flex text-center p-2">{description}</p>
      </div>
    </div>
  )
}

export default CardOffers