import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string;
  waist: string;
  price: string;
}

const CardWorks = ({ title, description, price, img }: Props) => {
  return (
    <div className="flex flex-col mx-auto hover:bg bg-white rounded-xl w-[90%] h-full">
      {/* classname="w-60 h-96 rounded-xl p-5" */}
      <div>
        <Image
          src={img}
          alt={title}
          width={3000}
          height={3000}
          className="object-contain w-full h-full lg:h-full rounded-t-xl bg-white"
        />
      </div>


      <div className="flex flex-col justify-center items-center space-y-2 p-2 border-t-4 border-pink-300 h-full">

        <h2 className="flex items-center justify-center text-center text-black text-lg uppercase">{title}</h2>
        <p className="text-black uppercase">{description}</p>
        <div className="font-bold text-2xl flex gap-4">
          ${price}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + 10}.00
          </del>
        </div>

        <button className="bg-pink-200 hover:bg-pink-300 text-black font-bolder py-2 px-4 rounded-full border-b-2">
          Ver prenda
        </button>
      </div>


    </div>
  )
}

export default CardWorks