import { BsFacebook, BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-black text-slate-200 lg:gap-0 pt-2">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="flex flex-col items-center">
          <h3 className="font-bold">Contacto:</h3>
          <p>Tel:+54 9 336 4615513</p>
          <p>Marielanas@gmail.com</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full ssm:pb-2 lg:pl-40 gap-0">
          <h1 className="font-bold">Redes sociales:</h1>
          <div className="flex flex-row">
            <div className="bg-black rounded-md p-[6px] text-[14] cursor-pointer hover:bg-accent hover:text-pink-00">
              <a href="https://www.facebook.com/Marietejidos" target="_blank">
                <BsFacebook size={30} />
              </a>
            </div>
            <div className="bg-black rounded-md p-[6px] text-[14] cursor-pointer hover:bg-accent hover:text-pink-200">
              <a href="https://www.instagram.com/m.arie_lanas/" target="_blank">
                <BsInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center pt-1">
        <p>Copyright &copy; 2025 - Marie lanas</p>
      </div>
    </div>
  )
}

export default Footer
