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
      <div className="flex md:flex-col justify-between items-center text-black h-[155px] py-6 px-8 md:px-20  bg-slate border-b-2 border-slate-100 drop-shadow-md">
        <Link href={"/"}>
          <Image
            src="/images/logo2.png"
            alt="Logo"
            width={500}
            height={500}
            className="w-52 lg:w-52 hover:scale-105 transition-all"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-5 text-base pb-1">
          <Link href="/" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-md">HOME</Link>
          <Link href="/hilos" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-md">HILOS</Link>
          <Link href="/lanas" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-md">LANAS</Link>
          <Link href="/accesorios" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-md">ACCESORIOS</Link>
          <Link href="/ofertas" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-md">OFERTAS</Link>
          <Link href="/trabajos" className="p-3 hover:text-pink-500 transition-all cursor-pointer text-md">TRABAJOS</Link>
        </div>



        <div className="lg:hidden block text-5xl cursor-pointer" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <HiMenuAlt3 size={50} className="text-black" />
        </div>

      </div>

      <div className="ssm:block lg:hidden">
        {
          isOpenMenu ? (
            <div className="bg-white flex flex-col w-full pt-5 pb-5 z-10 ">

              <Link href="/" onClick={handleClick} className="text-black text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">HOME</Link>
              <Link href="/hilos" onClick={handleClick} className="text-black text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">HILOS</Link>
              <Link href="/lanas" onClick={handleClick} className="text-black text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">LANAS</Link>
              <Link href="/accesorios" onClick={handleClick} className="text-black text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">ACCESORIOS</Link>
              <Link href="/ofertas" onClick={handleClick} className="text-black text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">OFERTAS</Link>
              <Link href="/trabajos" onClick={handleClick} className="text-black text-2xl list-none w-full text-center p-4 pr-10 hover:bg-pink-400 hover:text-white transition-all cursor-pointer">TRABAJOS</Link>

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

