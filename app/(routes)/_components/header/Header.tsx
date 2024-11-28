import React from "react"
import Language from "./Language"
import Logo from "./Logo"
import Menu from "./menu/MenuButton"
import ReservationButton from "./menu/ReservationButton"

const Header = () => {
  return (
    <header className="bg-[#1C1C1C]  sticky top-0 z-50  shadow-xl ">
      <div className="flex items-center justify-between  px-5 sm:px-10 md:px-16 mx-auto">
        <Logo />
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 text-white ">
          <Language />
          <ReservationButton />
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header
