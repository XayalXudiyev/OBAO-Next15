import Image from "next/image"
import React from "react"

const CateringMeal = () => {
  return (
    <div className="text-center  flex flex-col items-center px-2 my-14">
      <Image
        src="/cateringMeal.svg"
        alt="Catering"
        className="w-"
        width={400}
        height={1}
      />
      <h3 className="text-xl font-avenirHeavy5 py-3">BAO SANDWICHES</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
        pharetra, faucibus enim sit amet, ullamcorper est.{" "}
      </p>
    </div>
  )
}

export default CateringMeal
