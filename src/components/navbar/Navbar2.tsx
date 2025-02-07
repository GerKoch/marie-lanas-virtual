"use client";

import Link from "next/link"
import Image from "next/image"
import { BsSearch } from "react-icons/bs"
import { HiMenuAlt3 } from "react-icons/hi"
import { useState } from "react";


const Navbar2 = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);


  return (
    <>
      <div className="flex justify-between items-center text-white py-6 px-8 md:px-32 bg-black border-b-8 border-pink-200 drop-shadow-md">
        <Link href={"#"}>
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={200}
            height={100}
            className="w-52 hover:scale-105 transition-all"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-12  text-base">
          <li className="p-3 hover:text-pink-500 transition-all cursor-pointer">Home</li>
          <li className="p-3 hover:text-pink-500 transition-all cursor-pointer">Products</li>
          <li className="p-3 hover:text-pink-500 transition-all cursor-pointer">Exploe</li>
          <li className="p-3 hover:text-pink-500 transition-all cursor-pointer">Concat</li>
        </ul>

        <div className="relative hidden md:flex items-center justify-center gap-3">
          <input
            className="border-pink-200 border-2 p-2 px-4 rounded-3xl w-[100%] focus:bg-slate-50 focus:outline-pink-300"
            type="text"
            placeholder="Buscar producto..."
          />
          <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20} />
        </div>

        {/* Menu Icon */}

        <div className="lg:hidden block text-5xl cursor-pointer" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <HiMenuAlt3 size={50} className="text-slate-700" />
        </div>

      </div>

      <div className="ssm:block lg:hidden">
        {
          isOpenMenu ? (
            <div className="bg-black block w-full px-5 pt-5 pb-5 fixed z-10 ">
              <ul className="">
                <li className="text-pink-200 text-2xl list-none w-full text-center p-4 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">Home</li>
                <li className="text-pink-200 text-2xl list-none w-full text-center p-4 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">Products</li>
                <li className="text-pink-200 text-2xl list-none w-full text-center p-4 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">Exploe</li>
                <li className="text-pink-200 text-2xl list-none w-full text-center p-4 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">Concat</li>
              </ul>
            </div>
          ) : (
            <div></div>
          )
        }
      </div>


    </>
  )
}

export default Navbar2