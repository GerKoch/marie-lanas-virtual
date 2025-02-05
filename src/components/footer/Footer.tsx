import { BsFacebook, BsInstagram } from "react-icons/bs"
import { CiMail } from "react-icons/ci"


const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white lg:gap-4 ssm:gap-1 pt-2">
      <div className="flex flex-col items-center justify-left md:px-20 sm:flex-row mt-2 sm:gap-20 w-full ssm:w-fit sm:w-fit lg:w-[75%] lg:pl-20">
        <div className="flex flex-col text-xl w-[50%] ssm:w-fit ssm:pb-2">
          <h1 className="flex justify-center">Contacto</h1>
          <p>Tel:+54 9 11 5164-6034</p>
          <p>Marielanas@gmail.com</p>
        </div>
        <div className="flex w-full ssm:pb-2 lg:pl-96">
          <div className="flex items-center justify-end gap-10 lg:w-[75%] lg:pl-10">
            <div className="bg-black rounded-md p-[6px] text-[14] cursor-pointer hover:bg-accent hover:text-white">
              <a href="https://www.facebook.com/Marietejidos" target="_blank">
                <BsFacebook size={70} color="pink" />
              </a>

            </div>
            <div className="bg-black rounded-md p-[6px] text-[14] cursor-pointer hover:bg-accent hover:text-white">
              <a href="https://www.instagram.com/m.arie_lanas/" target="_blank">
                <BsInstagram size={70} color="pink" />
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="grid items-center justify-center text-sm w-full pb-2 ">
        <p className="text-xl">Copyright &copy; 2025 - Marie lanas</p>
      </div>
    </div>
  )
}

export default Footer
