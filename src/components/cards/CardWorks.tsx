import Image from "next/image";
import ProductPrice from "../DescuentoProducto/ProductPriceProps ";

interface Props {
  id: number;
  img: string;
  title: string;
  description: string;
  waist: string;
  price: number;
}

export const trabajosData = {

  "1": {
    "title": "Chaleco granix",
    "descripcion": "Lana LHO",
    "waist": "1, 2 y 3",
    "price": 145.000,
    "image": "/images/works/work1/chaleco-granix1.jpg"
  },
  "2": {
    "title": "Cardigan pancito",
    "descripcion": "Lana cisne Semi gorda",
    "waist": "2 super ancho",
    "price": 212.000,
    "image": "/images/works/work2/cardigan-pancito1.jpg"
  },
  "3": {
    "title": "Sueter combinado",
    "descripcion": "Lana 2/2",
    "waist": "1, 2, 3",
    "price": 189.000,
    "image": "/images/works/work3/sueter-combinado1.jpg"
  },
  "4": {
    "title": "Chaleco trenza",
    "descripcion": "Lana fidelio LHO",
    "waist": "1, 2, 3",
    "price": 189.000,
    "image": "/images/works/work4/chaleco-trenza1.jpg"
  },
  "5": {
    "title": "Bufanda granix",
    "descripcion": "Lana fidelio LHO",
    "waist": "",
    "price": 106.000,
    "image": "/images/works/work5/bufanda-granix1.jpg"
  },
  "6": {
    "title": "Sueter 3/4",
    "descripcion": "Lana 2/2",
    "waist": "",
    "price": 189.000,
    "image": "/images/works/work6/sueter1.jpg"
  },
  "7": {
    "title": "Gorro capucha",
    "descripcion": "Lana cashmilon",
    "waist": "",
    "price": 78.000,
    "image": "/images/works/work7/gorro-capucha1.jpg"
  }
}

const CardWorks = ({ title, description, price, img }: Props) => {
  return (
    <div className="relative hover:bg bg-white">
      <Image
        src={img}
        alt={title}
        width={3000}
        height={3000}
        className="object-contain w-full h-full lg:h-full rounded-t-sm bg-white"
      />
      <div className="absolute top-0 right-0 bg-black text-white py-1 px-4 rounded-l-full text-xl shadow-sm shadow-black/50">
        <p>10% OFF</p>
      </div>
      <div className="flex flex-col justify-start items-center space-y-2 p-5 border-pink-300 h-full">
        <h2 className="flex items-center justify-center text-center text-black text-xl uppercase">{title}</h2>
        <p className="text-black text-sm uppercase">{description}</p>
        <div className="font-bold text-base flex gap-4">
          <ProductPrice price={price} />
        </div>
      </div>
    </div>
  )
}

export default CardWorks