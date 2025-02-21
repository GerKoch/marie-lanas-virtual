"use client";

import Link from "next/link"
import Image from "next/image"
import { HiMenuAlt3 } from "react-icons/hi"
import { useState } from "react";



const Navbar2 = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpenMenu(false)
    }
  }


  return (
    <>
      <div className="flex justify-between items-center text-white h-[200px] py-6 px-8 md:px-20 bg-black border-b-8 border-pink-200 drop-shadow-md">
        <Link href={"/"}>
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={200}
            height={100}
            className="w-52 lg:w-72 hover:scale-105 transition-all"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-10  text-base">
          <Link href="/" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-xl">HOME</Link>
          <Link href="/hilos" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-xl">HILOS</Link>
          <Link href="/lanas" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-xl">LANAS</Link>
          <Link href="/accesorios" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-xl">ACCESORIOS</Link>
          <Link href="/ofertas" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-xl">OFERTAS</Link>
          <Link href="/trabajos" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-xl">TRABAJOS</Link>
        </div>



        <div className="lg:hidden block text-5xl cursor-pointer" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <HiMenuAlt3 size={50} className="text-pink-200" />
        </div>

      </div>

      <div className="ssm:block lg:hidden">
        {
          isOpenMenu ? (
            <div className="bg-black flex flex-col w-full pt-5 pb-5 z-10 ">

              <Link href="/" onClick={handleClick} className="text-pink-200 text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">HOME</Link>
              <Link href="/hilos" onClick={handleClick} className="text-pink-200 text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">HILOS</Link>
              <Link href="/lanas" onClick={handleClick} className="text-pink-200 text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">LANAS</Link>
              <Link href="/accesorios" onClick={handleClick} className="text-pink-200 text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">ACCESORIOS</Link>
              <Link href="/ofertas" onClick={handleClick} className="text-pink-200 text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">OFERTAS</Link>
              <Link href="/trabajos" onClick={handleClick} className="text-pink-200 text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">TRABAJOS</Link>

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


{/* <div className="relative hidden md:flex items-center justify-center gap-3">
          <input
            className="border-pink-200 border-2 p-2 px-4 rounded-3xl w-[100%] focus:bg-slate-50 focus:outline-pink-300"
            type="text"
            placeholder="Buscar producto..."
          />
          <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20} />
        </div> */}

