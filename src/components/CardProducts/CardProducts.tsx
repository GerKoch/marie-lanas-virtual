import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string;
  waist: string;

}

const CardProducts = ({ title, description, img }: Props) => {
  return (
    <div className="flex flex-col mx-auto hover:bg bg-white w-[100%] h-[500px] sm:h-[500px] md:h-[430px] rounded">
      <div>
        <Image
          src={img}
          alt={title}
          width={200}
          height={300}
          className="object-cover w-full h-[350px] rounded-t"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-1 pt-3 h-[15%]">
        <h2 className="flex items-center justify-center text-center text-black text-lg">{title}</h2>
        <p className="flex text-center">{description}</p>
      </div>
    </div>
  )
}

export default CardProducts


{/* <button className="bg-pink-100 hover:bg-pink-300 text-black font-bolder py-2 px-4 rounded-md border-b-2">
          Información
        </button> */}

{/* <p className="text-black ">{description}</p> */ }

{/* <div className="font-bold text-2xl flex gap-4">
          ${price}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + 50}.00
          </del>
        </div> */}