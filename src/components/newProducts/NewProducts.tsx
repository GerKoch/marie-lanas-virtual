import Image from "next/image"



const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">¡Tu lanería amiga!</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-10 xl:gap-x-20 xl:gap-y-10">
          <div>
            <a>Hilos</a>
            <Image
              src={"/images/bg2.jpg"}
              alt={"Work1"}
              width={3000}
              height={3000}
            />
          </div>
          <div>
            <a>Lanas</a>
            <Image
              src={"/images/bg1.jpg"}
              alt={"Work1"}
              width={3000}
              height={3000}
            />
          </div>
          <div>
            <a>Lanas</a>
            <Image
              src={"/images/works/work2/cardigan-pancito1.jpg"}
              alt={"Work1"}
              width={3000}
              height={3000}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProducts 