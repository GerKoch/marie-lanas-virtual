interface Props {
  price: number;
}

const ProductPrice = ({ price }: Props) => {

  const discount = price * 0.10
  const discountedPrice = price - discount

  return (
    <div className="font-bold text-base flex gap-4">
      ${Math.floor(discountedPrice)}.000
      <del className="text-gray-500 font-normal text-base">
        ${price}.000
      </del>
    </div>
  )
}

export default ProductPrice;
