import CateringForm from "@/components/CateringForm"
import CateringMeal from "@/components/CateringMeal"
import Image from "next/image"
import React from "react"

const CateringPage = () => {
  return (
    <div className="h-full">
      <Image
        src="/cateringHero.svg"
        alt="Catering"
        className="w-full"
        width={1}
        height={1}
      />
      <div className="text-center py-10 md:py-16 space-y-5 px-5 md:px-0">
        <p className="text-base">FEATURED</p>
        <p className="text-4xl">THE CHEF'S <span className="text-[#FB4444]">VISION</span></p>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
          tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis in tellus pharetra,
          faucibus enim sit amet, ullamcorper est.
        </p>
      </div>




      <div className="w-full bg-[#D2B48C] pb-7 md:py-16 md:px-0">
        <div className=" flex items-center md:flex-row flex-col-reverse  md:w-[88%] md:h-96    ">
          <div className="space-y-3 md:space-y-4 md:container  px-5 md:px-0 text-center h-full md:bg-white flex flex-col justify-center md:text-start   ">
            <p className="text-center md:text-start mt-4 md:mt-0 text-base">CULINARY PERFECTION</p>
            <p className="text-4xl text-center md:text-start">OUR <span className="text-[#FB4444]">ROUTES </span>
            </p>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est.
            </p>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Image
            src="/cateringRoutes.svg"
            alt="Catering"
            className="w-full md:w-[402px]"
            width={0}
            height={0}
          />
        </div>
      </div>




      <div className="text-center mt-7 md:mt-14 md:container">
        <p className="text-center md:text-start mt-4 md:mt-0 text-base">CULINARY PERFECTION</p>
        <p className="text-4xl mt-1 md:mt-0">WHAT DO WE <span className="text-[#FB4444]">CATER</span></p>

        <div className="grid md:grid-cols-3 w-full ">
          <CateringMeal />
          <CateringMeal />

        </div>
      </div>


      <div className="w-full bg-[#D2B48C] md:py-16">
        <div className=" flex flex-col md:flex-row  items-center md:ml-auto md:w-[88%] md:h-96    ">
          <Image
            src="/cateringRoutes.svg"
            alt="Catering"
            width={0}
            height={0}
            className="w-full md:w-[402px]"
          />
          <div className="space-y-4 px-5 md:px-0 py-7 md:container h-full md:bg-white flex flex-col justify-center text-start  ">
            <p className="text-center md:text-start text-base">LEARN ABOUT</p>
            <p className="text-4xl text-center md:text-start">OUR <span className="text-[#FB4444]">SERVICES </span></p>
            <p className="text-center md:text-start text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est.
            </p>
            <p className="text-center md:text-start text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>




      <div className="bg-[#1C1C1C] flex flex-col md:flex-row  md:container px-10 md:px-36 gap-10 pt-20">
        <div className="md:w-1/2">
          <p className="text-4xl text-center md:text-start text-white font-avenirHeavy5 mb-7">
            GET IN <span className="text-[#FB4444] font-avenirHeavy5">TOUCH! </span>
          </p>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="md:w-1/2">
          <CateringForm />
        </div>
      </div>
    </div>
  )
}

export default CateringPage
