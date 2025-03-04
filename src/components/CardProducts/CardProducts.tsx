import Image from "next/image"

interface Props {
  img: string;
  title: string;
}

const CardProducts = ({ title, img }: Props) => {
  return (
    <div className="flex flex-col mx-auto hover:bg bg-white w-[100%] h-full rounded">
      <div>
        <Image
          src={img}
          alt={title}
          width={200}
          height={300}
          className="object-cover w-full h-[350px] rounded-t"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-1 py-3 h-full">
        <h2 className="flex items-center justify-center text-center text-black text-lg">{title}</h2>
      </div>
    </div>
  )
}

export default CardProducts
