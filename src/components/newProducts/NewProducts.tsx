import Image from "next/image"
import Link from "next/link"

const NewProducts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid w-full h-full grid-cols-1 sm:grid-cols-3 gap-10 py-3 p-2 lg:p-10 drop-shadow-md">
        <Link href="/hilos" className="relative hover:bg bg-white">
          <Image
            src={"/images/bg/bg2.jpg"}
            alt={"Work1"}
            width={3000}
            height={3000}
            className="h-full w-full object-cover rounded-md transition-all duration-300 transform hover:shadow-2xl"
          />
          <div className="absolute bottom-10 left-10 bg-transparent text-pink-100 py-1 text-2xl border-b-4 border-pink-100">
            <span>HILOS</span>
          </div>
        </Link>
        <Link href="/lanas" className="relative hover:bg bg-white">
          <Image
            src={"/images/bg/bg1.jpg"}
            alt={"Work1"}
            width={3000}
            height={3000}
            className="h-full w-auto object-cover rounded-md transition-all duration-300 transform hover:shadow-2xl"
          />
          <div className="absolute bottom-10 left-10 bg-transparent text-pink-100 py-1 text-2xl border-b-4 border-pink-100">
            <span>LANAS</span>
          </div>
        </Link>
        <Link href="/trabajos" className="relative hover:bg bg-white">
          <Image
            src={"/images/bg/bg3.jpg"}
            alt={"Work1"}
            width={3000}
            height={3000}
            className="h-full w-auto object-cover rounded-md transition-all duration-300 transform hover:shadow-2xl"
          />
          <div className="absolute bottom-10 left-10 bg-transparent text-pink-100 py-1 text-2xl border-b-4 border-pink-100">
            <span>TRABAJOS</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NewProducts 