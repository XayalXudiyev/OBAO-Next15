import Image from "next/image"
import React from "react"

const AboutUsComponent = () => {
  return (
    <div
      id="about-us"
      className="bg-[#D2B48C] h-[25.7rem] mx-auto relative flex flex-col justify-center items-center"
    >
      <div className="w-4/5 space-y-10 text-center ">
        <div className="text-3xl font-bold md:text-4xl font-avenirMedium4">
          ABOUT US
        </div>
        <p className="text-xl leading-7 md:text-2xl font-avenirRoman3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
          tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <Image
          src="/aboutRight.svg"
          alt="about us"
          width={72}
          height={72}
          className="absolute top-6 md:top-10 right-2 sm:w-18 md:w-20 md:right-10 xl:w-24"
        />
        <Image
          src="/aboutLeft.svg"
          alt="about us"
          width={72}
          height={72}
          className="absolute bottom-6 left-2 sm:w-18 md:bottom-12 md:w-20 md:left-10"
        />
      </div>
    </div>
  )
}

export default AboutUsComponent
