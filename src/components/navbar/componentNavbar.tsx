"use client";

import Link from "next/link";
import { useState } from "react";



const componentNavbar = () => {

  const [isThreadsOpen, setIsThreadsOpen] = useState(false);
  const [isCottonsOpen, setIsCottonsOpen] = useState(false);

  return (
    <div className="w-full h-24 shadow-md bg-pink-200">
      <div className="flex justify-center items-center h-full w-full px-4">
        <ul className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            HOME
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
          </Link>
          <li>
            <button onClick={() => setIsThreadsOpen(!isThreadsOpen)}>
              HILADOS
            </button>
            {isThreadsOpen && (
              <ul>
                <li>
                  <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
                    <span>VERANO</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
                    <span>INVIERNO</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => setIsCottonsOpen(!isCottonsOpen)}>
              ALGODONES
            </button>
            {isCottonsOpen && (
              <ul>
                <li>
                  <Link href="#">
                    <span>VERANO</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span>INVIERNO</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            ACCESORIOS
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            OFERTAS
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            TEJIDOS
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            NOSOTROS
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            CONTACTO
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default componentNavbar