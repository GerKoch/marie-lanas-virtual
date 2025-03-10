import Image from "next/image";

interface Props {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

export default function Slide({ img }: Props) {
  return (
    <div className="relative w-full h-[300px] md:h-[900px]">
      <div className="absolute left-[10px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[90%] -translate-y-[50%] space-y-2 lg:space-y-4 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none z-10 ">
      </div>
      <Image
        src={img}
        alt="banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{ objectPosition: "center center" }}
      />
    </div>
  )
}

