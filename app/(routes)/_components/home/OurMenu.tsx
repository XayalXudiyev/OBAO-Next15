import { Button } from "@/components/ui/button"
import React from "react"

const OurMenuComponent = () => {
  return (
    <div className="bg-[#1C1C1C] h-[25.7rem] w-full mx-auto relative flex flex-col justify-center items-center">
      <div className="text-center w-4/5 space-y-10 sm:mt-12 md:mt-24">
        <h1 className="text-[#FB4444] text-4xl font-bold font-avenirMedium4 text-center">
          OUR MENU
        </h1>
        <p className="text-white text-2xl leading-7 font-avenirRoman3">
          Savor the authentic flavors of Japan, from mouthwatering street bites
          to refreshing drinks, crafted with care.
        </p>
        <div className="flex gap-4 justify-center gap-x-8">
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent px-4 border-[px] border-[#D2B48C] text-[#D2B48C] rounded-none hover:bg-[#D2B48C] hover:text-black"
          >
            Menu
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent px-4 border-[px] border-[#D2B48C] text-[#D2B48C] rounded-none hover:bg-[#D2B48C] hover:text-black"
          >
            Drinks
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OurMenuComponent
