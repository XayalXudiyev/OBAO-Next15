import AboutUsComponent from "../_components/home/AboutUs"
import CarouselComponent from "../_components/home/Carousel"
import HeroComponent from "../_components/home/Hero"
import OurMenuComponent from "../_components/home/OurMenu"
import RestaurantsSection from "../_components/home/Restaurants"

const Home = () => {
  return (
    <div className="w-full">
      <HeroComponent />
      <AboutUsComponent />
      <CarouselComponent />
      <OurMenuComponent />
      <RestaurantsSection />
    </div>
  )
}

export default Home
