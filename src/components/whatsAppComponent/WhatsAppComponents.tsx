import { IoLogoWhatsapp } from "react-icons/io"

const WhatsAppComponent = () => {
  return (
    <div>
      <a href="https://wa.me/5493364615513?text=Hola quiero hacerte una consulta" target="_blank">
        <IoLogoWhatsapp size={70} className="text-green-500 fixed right-[5%] bottom-[5%] hover:bg-accent hover:text-green-700" />
      </a>
    </div>
  )
}

export default WhatsAppComponent