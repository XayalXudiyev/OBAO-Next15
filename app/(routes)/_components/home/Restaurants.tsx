import RestaurantComponent from "@/components/RestaurantComponent"

const RestaurantsSection = () => {
  return (
    <div className="bg-[#1C1C1C]  w-full mx-auto relative flex flex-col justify-center items-center">
      <h1 className="text-[#FB4444] text-4xl font-bold font-avenirMedium4 text-center mb-5 md:mb-0  md:mt-16">
        RESTAURANTS
      </h1>
      {[1, 2, 3, 4].map((_, index) => (
        <RestaurantComponent key={index} isImageLeft={index % 2 === 0} />
      ))}
    </div>
  )
}

export default RestaurantsSection
