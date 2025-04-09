import Image from "next/image"
import Link from "next/link"

const NewProducts = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-6 md:p-10">
        {[
          { href: "/hilos", img: "/images/bg/bg2.jpg", label: "HILOS" },
          { href: "/lanas", img: "/images/bg/bg1.jpg", label: "LANAS" },
          { href: "/trabajos", img: "/images/bg/bg3.jpg", label: "TRABAJOS" },
        ].map(({ href, img, label }) => (
          <Link
            href={href}
            key={href}
            className="relative aspect-[3/4] overflow-hidden rounded-md group"
          >
            <Image
              src={img}
              alt={label}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 text-xl border-b-2 border-pink-200 rounded-t">
              <span>{label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NewProducts;
