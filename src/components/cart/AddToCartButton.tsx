"use client"
import { useCartStore } from "@/store/useCartStore"

type AddToCartButtonProps = {
  id: string;
  name: string;
  price: number;
}

const AddToCartButton = ({ id, name, price }: AddToCartButtonProps) => {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <button
      onClick={() => addToCart({ id, name, price, quantity: 1 })}
      className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium transition"
    >
      Agregar al carrito
    </button>
  )
}

export default AddToCartButton