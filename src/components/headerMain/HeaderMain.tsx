import Image from "next/image";

import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function () {
  return (
    <div className="bg-pink-50 border-b border-pink-200 px-3">
      <div className="container sm:flex justify-between items-center">
        <div className="flex flex-row items-center font-bold text-6xl text-center pb-4 sm:pb-0 text-blackish w-[100%]">
          <a href="/" className="">
            <Image
              src="/images/Mlogo.png"
              alt="Logo"
              width={200}
              height={100}
            />
          </a>
          <h1 className="text-7xl">Marie Lanas</h1>
        </div>

        <div className="flex flex-col bg-pink-50 items-center justify-center px-2 w-full">
          <div className="flex flex-row items-center justify-between w-[100%] gap-2 p-2 m-2 ">
            <div className="w-full sm:w-[300px] md:w-[90%] relative">
              <input
                className="border-pink-200 border p-2 px-4 rounded-3xl w-[100%]"
                type="text"
                placeholder="Ingrese el nombre del producto..."
              />
              <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20} />
            </div>
            <div className="hidden lg:flex rounded-md p-[6px] pb-3 text-[14] hover:bg-accent hover:text-white gap-4 text-gray-500 text-[30px]">
              <div className="relative">
                <HiOutlineShoppingBag size={50} />
                <div className="bg-pink-600 rounded-full absolute top-0 right-0 w-[28px] h-[28px] text-[20px] text-white grid place-items-center translate-x-1 -translate-y-1">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}