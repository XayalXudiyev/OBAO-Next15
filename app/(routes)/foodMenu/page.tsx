"use client"
import OfferMealComponent from "@/components/OfferMealComponent"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import React, { useState } from "react"

const FoodMenuPage = () => {
  interface Category {
    id: number
    title: string
  }

  const categories: Category[] = [
    {
      id: 1,
      title: "Big plates",
    },
    {
      id: 2,
      title: "Entrees",
    },
    {
      id: 3,
      title: "Desserts",
    },
    {
      id: 4,
      title: "Drinks",
    },
    {
      id: 5,
      title: "Non gluten",
    },
    {
      id: 6,
      title: "Non gluten",
    },
  ]

  const [clicked, setClicked] = useState<number>(1)

  const handleClick = (id: number) => {
    setClicked(id)
  }

  return (
    <div className="relative flex bg-[#1C1C1C]">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto]  bg-repeat-y opacity-10 z-10" />
     

      <div className="z-20 text-white  flex flex-col justify-center items-center w-full relative">
        <Image
          width={1}
          height={1}
          src="/menuHero.svg"
          alt="menuHero"
          className="w-full py-10 px-3 md:px-48 md:py-28"
        />

        <div className="border-[1px] border-y-[#634927] border-x-0 w-full flex items-center justify-start  md:justify-center overflow-auto gap-3 pl-2 md:pl-0 md:gap-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleClick(category.id)}
              className={cn(
                "rounded-none text-lg bg-[#FB4444] hover:bg-[#FB4444] my-3 font-avenirHeavy5 max-h-9 ",
                clicked === category.id ? "bg-[#FB4444]" : "bg-transparent",
              )}
            >
              {category.title}
            </Button>
          ))}
        </div>

        <div className="w-full">
          <h2 className="text-4xl font-bold font-avenirMedium4 text-center w-full mt-10 md:mt-20 mb-5 md:mb-10">
            OUR OFFERINGS
          </h2>
          {[1, 2, 3, 4].map((_, index) => (
            <OfferMealComponent key={index} isImageLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FoodMenuPage
