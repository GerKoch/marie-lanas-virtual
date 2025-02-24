import Image from "next/image"

interface Props {
  img: string;
  title: string;
  description: string;
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
        {/* <p className="flex text-center">{description}</p> */}
      </div>
    </div>
  )
}

export default CardProducts
