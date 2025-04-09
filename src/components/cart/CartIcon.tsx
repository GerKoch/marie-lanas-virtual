"use client"

import { ShoppingCart } from "lucide-react"
import { useCartStore } from "@/store/useCartStore"
import Link from "next/link"

const CartIcon = () => {
  const cartItems = useCartStore((state) => state.cart)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Link href="/cart" className="relative cursor-pointer ml-4">
      <ShoppingCart className="w-6 h-6 text-black" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  )
}

export default CartIcon