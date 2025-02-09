import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string;
  price: string;
}

const CardAccessories = ({ title, description, price, img }: Props) => {
  return (
    <div className="flex flex-col mx-auto hover:bg bg-pink-50 rounded-xl w-[90%] h-full">
      {/* classname="w-60 h-96 rounded-xl p-5" */}
      <div>
        <Image
          src={img}
          alt={title}
          width={200}
          height={300}
          className="w-full h-[300px] lg:h-[350px] rounded-t-xl"
        />
      </div>


      <div className="flex flex-col justify-center items-center space-y-2 p-2">

        <h2 className="flex items-center justify-center text-black text-2xl uppercase">{title}</h2>
        <p className="text-black text-xl">{description}</p>

        <div className="font-bold text-2xl flex gap-4">
          ${price}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + 50}.00
          </del>
        </div>
      </div>


    </div>
  )
}

export default CardAccessories