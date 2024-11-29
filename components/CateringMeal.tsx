import Image from "next/image"
import React from "react"

const CateringMeal = () => {
  return (
    <div className="text-center  flex flex-col items-center  md:px-2 my-5 md:my-14">
      <Image
        src="/cateringMeal.svg"
        alt="Catering"
        className="w-full md:w-[402px]"
        width={0}
        height={0}
      />
      <h3 className="text-2xl md:text-xl  font-avenirHeavy5 py-3">BAO SANDWICHES</h3>
      <p className="px-5 md:px-0 text-lg md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
        pharetra, faucibus enim sit amet, ullamcorper est.{" "}
      </p>
    </div>
  )
}

export default CateringMeal
