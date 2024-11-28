import Footer from "./_components/footer/Footer"
import Header from "./_components/header/Header"

interface RoutesLayoutProps {
  children: React.ReactNode
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default RoutesLayout
