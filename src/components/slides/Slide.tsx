import Image from "next/image";

interface Props {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

export default function ({ img, title, mainTitle, price }: Props) {
  return (
    <div className="">
      {/* <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:maw-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] 
        sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
      </div> */}
      <Image
        className="w-[100%] h-[300px] md:h-[500px] object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
  )
}

