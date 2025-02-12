"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";



const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }


  return (
    <nav className="flex items-center bg-pink-200">
      <div className="bg-pink-200 w-[50%] container flex justify-center items-baseline">
        <div className="flex flex-row ">
          <Image
            src="/images/Mlogo.png"
            alt="Logo"
            width={200}
            height={100}
            className="ssm:hidden lg:flex"
          />
          <h1 className="flex items-center text-7xl lg:flex">Marie Lanas</h1>
        </div>
        <div className="hidden lg:block">
          <Link href="#" className="lg:mr-7 hover:text-pink-700">
            HOME
          </Link>
          <Link href="#" className="lg:mr-7 hover:text-pink-700">
            HILADOS
          </Link>
          <Link href="#" className="lg:mr-7 hover:text-pink-700">
            ALGODONES
          </Link>
          <Link href="#" className="lg:mr-7 hover:text-pink-700">
            ACCESORIOS
          </Link>
          <Link href="#" className="lg:mr-7 hover:text-pink-700">
            OFERTAS
          </Link>
          <Link href="#" className="lg:mr-7 hover:text-pink-700">
            TEJIDOS
          </Link>
          <Link href="#" className="lg:mr-7 hover:text-pink-700">
            NOSOTROS
          </Link>
          <Link href="#" className="lg:mr-7 hover:text-pink-700">
            CONTACTO
          </Link>
        </div>
      </div>

      <div className="ssm:block lg:hidden w-[25%] flex z-50 ">
        {
          toggle ? (
            <AiOutlineClose onClick={closeMenu} size={50} className="" />
          ) : (
            <HiMenuAlt3 onClick={openMenu} size={50} className="text-slate-700" />
          )
        }
      </div>

      <div className="ssm:block justify-end lg:hidden">
        {
          toggle ? (
            <div className="flex flex-col bg-pink-200 px-5 fixed w-[100%] h-fit z-10 justify-start pt-5 pb-3">
              <Link href="#" className="flex justify-center text-black hover:text-pink-700 text-2xl mb-2 cursor-pointer">
                HOME
              </Link>
              <Link href="#" className="flex justify-center text-black  hover:text-pink-700 text-2xl mb-2 cursor-pointer">
                HILADOS
              </Link>
              <Link href="#" className="flex justify-center text-black hover:text-pink-700 text-2xl mb-2 cursor-pointer">
                ALGODONES
              </Link>
              <Link href="#" className="flex justify-center text-black hover:text-pink-700 text-2xl mb-2 cursor-pointer">
                ACCESORIOS
              </Link>
              <Link href="#" className="flex justify-center text-black hover:text-pink-700 text-2xl mb-2 cursor-pointer">
                OFERTAS
              </Link>
              <Link href="#" className="flex justify-center text-black hover:text-pink-700 text-2xl mb-2 cursor-pointer">
                TEJIDOS
              </Link>
              <Link href="#" className="flex justify-center text-black hover:text-pink-700 text-2xl mb-2 cursor-pointer">
                NOSOTROS
              </Link>
              <Link href="#" className="flex justify-center text-black hover:text-pink-700 text-2xl mb-2 cursor-pointer">
                CONTACTO
              </Link>
            </div>
          ) : (
            <div></div>
          )
        }

      </div>
    </nav>
  )
}

export default Navbar















// import Link from "next/link";



// export default function () {
//   return (
//     <div className="hidden lg:block">
//       <div className="bg-pink-50 border-t border-pink-200 ">
//         <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
//           <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
//             HOME
//             <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
//           </Link>
//           <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
//             HILADOS
//             <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
//           </Link>
//           <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
//             ALGODONES
//             <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
//           </Link>
//           <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
//             ACCESORIOS
//             <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
//           </Link>
//           <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
//             OFERTAS
//             <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
//           </Link>
//           <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
//             TEJIDOS
//             <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
//           </Link>
//           <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
//             NOSOTROS
//             <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
//           </Link>
//           <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
//             CONTACTO
//             <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
//           </Link>

//         </div>
//       </div>
//     </div>
//   )
// }

