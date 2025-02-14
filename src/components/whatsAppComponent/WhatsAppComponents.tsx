import { IoLogoWhatsapp } from "react-icons/io"



const WhatsAppComponent = () => {
  return (
    <div>
      <a href="https://wa.me/5493364615513?text=Hola quiero hacerte una consulta" target="_blank">
        <IoLogoWhatsapp size={90} className="text-green-600 fixed right-[5%] bottom-[5%]" />
      </a>
    </div>
  )
}

export default WhatsAppComponent