import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] w-full border-t border-[#634927] min-h-[76px] flex items-center justify-between">
      <div className="flex items-center justify-between container mx-auto ">
        <div className="flex justify-center items-center text-white font-avenirMedium4 text-sm">
          <p>Privacy policy</p>
          <p className="ml-7">© 2024</p>
          <p className="ml-3">O’BAO</p>
        </div>
        <div className="flex justify-center items-center gap-4 text-white text-xl">
          <FaFacebookF />
          <FaInstagram />
        </div>
      </div>
    </footer>
  )
}

export default Footer
