import Image from "next/image"
import ProductPrice from "../DescuentoProducto/ProductPriceProps"
import AddToCartButton from "../cart/AddToCartButton"

interface Props {
  img: string
  title: string
  description: string
  price: number

}

const CardProduct = ({ img, title, description, price }: Props) => {
  return (
    <div className="relative bg-white w-full max-w-[300px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]">
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <div className="flex flex-col justify-start items-center space-y-2 p-4">
        <h2 className="text-center text-black text-lg font-semibold uppercase">
          {title}
        </h2>
        {/* <p className="text-black text-sm text-center">{description}</p> */}
        <div className="font-bold text-base flex gap-4">
          {price > 0 ? (
            <ProductPrice price={price} />
          ) : (
            <span className="text-red-500 font-medium">Consultar precio</span>
          )}
        </div>

        <AddToCartButton id={title} name={title} price={price} />
      </div>
    </div>
  )
}

export default CardProduct



// import Image from "next/image"
// import AddToCartButton from "../cart/AddToCartButton"

// interface Props {
//   img: string;
//   title: string;
//   description: string;
//   price: number;
// }

// const CardProducts = ({ title, img, price, description }: Props) => {
//   return (
//     <div className="flex flex-col mx-auto hover:bg-gray-100 bg-white w-full rounded-sm shadow-lg overflow-hidden">
//       <div>
//         <Image
//           src={img}
//           alt={title}
//           width={300}
//           height={400}
//           className="object-cover w-full h-[350px] rounded-t-sm"
//         />
//       </div>
//       <div className="flex flex-col justify-center items-center space-y-2 py-3">
//         <h2 className="flex items-center justify-center text-center text-black text-lg">
//           {title}
//         </h2>
//         <p className="text-black text-sm uppercase">
//           {description}
//         </p>
//         <div className="font-bold text-base flex gap-4">
//           {price > 0 ? (
//             <p className="text-gray-700 font-semibold">${price}</p>
//           ) : (
//             <p className="text-gary-500 font-semibold text-sm">Consultar precio</p>
//           )}
//           <AddToCartButton id={title} name={title} price={price} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CardProducts
