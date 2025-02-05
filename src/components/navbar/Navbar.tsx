import Link from "next/link";



export default function () {
  return (
    <div className="hidden lg:block">
      <div className="bg-pink-50 border-t border-pink-200 ">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            HOME
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            HILADOS
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            ALGODONES
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            ACCESORIOS
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            OFERTAS
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            TEJIDOS
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            NOSOTROS
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
          </Link>
          <Link href="#" className="relative hover:bg-accent hover:transition-all hover:duration-400 rounded">
            CONTACTO
            <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-accent scale-0 origin-left transition-all duration-400"></span>
          </Link>

        </div>
      </div>
    </div>
  )
}

