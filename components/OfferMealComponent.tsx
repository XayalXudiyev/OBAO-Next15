import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const OfferMealComponent = ({ isImageLeft }: { isImageLeft: boolean }) => {
  return (
    <div className="flex  px-16 flex-col items-center gap-6 md:gap-20 pt-4 md:pb-14 md:flex-row md:items-start">

      <div
        className={`w-full md:w-1/2 ${!isImageLeft ? "md:order-2" : "md:order-1"}`}
      >
        <Image
          width={100}
          height={100}
          src="/slider/slider4.jpg"
          alt="img"
          className="w-full md:px-4"
        />
      </div>

      <div
        className={`w-full md:w-1/2 text-3xl ${isImageLeft ? "md:order-2" : "md:order-1"
          }`}
      >
        <div className="mb-5 flex items-center">
          {isImageLeft && (
            <div className="bg-[#FB4444] h-0 md:h-6 w-14 absolute right-0"> </div>
          )}

          <span className="text-2xl md:text-3xl  mb-2">DONBURI BOL a BASE DE RIZ</span>
          {!isImageLeft && (
            <div className="bg-[#FB4444] h-0 md:h-6 w-14 absolute left-0 "> </div>
          )}
        </div>

        <Carousel
          // opts={{ loop: true }}
          // plugins={[
          //   Autoplay({
          //     delay: 2000,
          //   }),
          // ]}
          className="font-avenirBook2"
        >
          <CarouselContent>
            <CarouselItem>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex w-full justify-between items-center mb-4"
                >
                  <div>
                    <h3 className="text-lg">
                      <span className="text-[#FB4444]">{index + 1}.</span>{" "}
                      Yakutori Poulet
                    </h3>
                    <p className="text-sm text-[#FFFFFFB2]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="text-lg ml-4">17$</div>
                </div>
              ))}
            </CarouselItem>
            <CarouselItem>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex w-full justify-between items-center mb-4"
                >
                  <div>
                    <h3 className="text-lg">
                      <span className="text-[#FB4444]">{index + 1}.</span>{" "}
                      Yakutori Poulet
                    </h3>
                    <p className="text-sm text-[#FFFFFFB2]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="text-lg ml-4">17$</div>
                </div>
              ))}
            </CarouselItem>

          </CarouselContent>


          <CarouselPrevious className="hover:text-[#BE935A] text-[#BE935A] hover:bg-transparent bg-transparent border-none" />
          <CarouselNext className="hidden md:block hover:text-[#BE935A] text-[#BE935A] hover:bg-transparent bg-transparent border-none" />

        </Carousel>
      </div>
    </div>
  )
}

export default OfferMealComponent
