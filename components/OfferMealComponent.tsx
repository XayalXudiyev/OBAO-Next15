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
    <div className="flex w-full bg container mb-20 h-fit gap-4  ">
      <div
        className={`w-full md:w-1/2 ${!isImageLeft ? "md:order-2" : "md:order-1"}`}
      >
        <Image
          width={100}
          height={100}
          src="/slider/slider4.jpg"
          alt="img"
          className="w-full px-4"
        />
      </div>

      <div
        className={`w-full md:w-1/2 px-5 text-3xl ${
          isImageLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="mb-5 flex items-center">
          {isImageLeft && (
            <div className="bg-[#FB4444] h-6 w-14 absolute right-0"> </div>
          )}

          <span>DONBURI BOL a BASE DE RIZ</span>
          {!isImageLeft && (
            <div className="bg-[#FB4444] h-6 w-14 absolute left-0"> </div>
          )}
        </div>

        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="font-avenirBook2"
        >
          <CarouselPrevious className="text-[#BE935A] bg-transparent border-none" />
          <CarouselContent>
            <CarouselItem>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex w-full justify-between items-center mb-4"
                >
                  <div>
                    <h3 className="text-lg mb-1">
                      <span className="text-[#FB4444]">{index + 1}.</span>{" "}
                      Yakutori Poulet
                    </h3>
                    <p className="text-sm text-[#FFFFFFB2]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="text-lg">17$</div>
                </div>
              ))}
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="text-[#BE935A] bg-transparent border-none" />
        </Carousel>
      </div>
    </div>
  )
}

export default OfferMealComponent