"use client"

import { useCartStore } from "@/store/useCartStore"
import Link from "next/link"

const CartPage = () => {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const clearCart = useCartStore((state) => state.clearCart)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const whatsAppMessage = cart.map((item) => `${item.quantity} x ${item.name}`).join("\n")
  const whatsAppURL = `https://wa.me/5493364615513?text=${encodeURIComponent(`Hola! Quiero comprar:\n${whatsAppMessage}\n\nTotal: $${total}`)}`

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <div className="space-x-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.quantity} x ${item.price}</p>
              </div>
              <button onClick={() => { removeFromCart(item.id) }} className="text-red-500 text-sm hover:underline">
                Quitar
              </button>
            </div>
          ))}

          <div className="text-right font-semibold text-lg">
            Total: ${total}
          </div>

          <div className="flex justify-between mt-4">
            <button onClick={clearCart} className="text-sm text-red-600 hover:underline">
              Vaciar carrito
            </button>
            <a
              href={whatsAppURL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
            >
              Finalizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartPage