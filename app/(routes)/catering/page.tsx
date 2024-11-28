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
      <div className="text-center py-16 space-y-5">
        <p>FEATURED</p>
        <p className="text-4xl">
          {" "}
          THE CHEF'S <span className="text-[#FB4444]">VISION</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
          tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis in tellus pharetra,
          faucibus enim sit amet, ullamcorper est.{" "}
        </p>
      </div>

      <div className="w-full bg-[#D2B48C] py-16">
        <div className=" flex items-center  w-[88%] h-96    ">
          <div className="space-y-4 container h-full bg-white flex flex-col justify-center text-start  ">
            <p>CULINARY PERFECTION</p>
            <p className="text-4xl">
              OUR <span className="text-[#FB4444]">ROUTES </span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <Image
            src="/cateringRoutes.svg"
            alt="Catering"
            className="w--full"
            width={400}
            height={1}
          />
        </div>
      </div>

      <div className="text-center mt-14 container">
        <p>FEATURED</p>
        <p className="text-4xl">
          {" "}
          THE CHEF'S <span className="text-[#FB4444]">VISION</span>
        </p>

        <div className="grid grid-cols-3 w-full ">
          <CateringMeal />
          <CateringMeal />
          <CateringMeal />
        </div>
      </div>

      <div className="w-full bg-[#D2B48C] py-16">
        <div className=" flex items-center ml-auto w-[88%] h-96    ">
          <Image
            src="/cateringRoutes.svg"
            alt="Catering"
            width={400}
            height={1}
          />
          <div className="space-y-4 container h-full bg-white flex flex-col justify-center text-start  ">
            <p>LEARN ABOUT</p>
            <p className="text-4xl">
              OUR <span className="text-[#FB4444]">SERVICES </span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est.{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1C1C1C] flex  container px-36 gap-10 pt-20">
        <div className="w-1/2">
          <p className="text-4xl text-white font-avenirHeavy5 mb-7">
            GET IN{" "}
            <span className="text-[#FB4444] font-avenirHeavy5">TOUCH! </span>
          </p>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="w-1/2">
          <CateringForm />
        </div>
      </div>
    </div>
  )
}

export default CateringPage
