import Image from "next/image"



const NewProducts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid w-full h-full grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 pt-16 pb-16 p-2 lg:p-10 drop-shadow-md">
        <div className="relative hover:bg bg-white">
          <Image
            src={"/images/bg/bg2.jpg"}
            alt={"Work1"}
            width={3000}
            height={3000}
            className="h-full w-full object-cover rounded-md"
          />
          <div className="absolute bottom-10 left-10 bg-transparent text-pink-100 py-1 text-2xl border-b-4 border-pink-100">
            <a href="/hilos">HILOS</a>
          </div>
        </div>
        <div className="relative hover:bg bg-white">
          <Image
            src={"/images/bg/bg1.jpg"}
            alt={"Work1"}
            width={3000}
            height={3000}
            className="h-full w-auto object-cover rounded-md"
          />
          <div className="absolute bottom-10 left-10 bg-transparent text-pink-100 py-1 text-2xl border-b-4 border-pink-100">
            <a href="/lanas">LANAS</a>
          </div>
        </div>
        <div className="relative hover:bg bg-white">
          <Image
            src={"/images/bg/bg3.jpg"}
            alt={"Work1"}
            width={3000}
            height={3000}
            className="h-full w-auto object-cover rounded-md"
          />
          <div className="absolute bottom-10 left-10 bg-transparent text-pink-100 py-1 text-2xl border-b-4 border-pink-100">
            <a href="/trabajos">TRABAJOS</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProducts 