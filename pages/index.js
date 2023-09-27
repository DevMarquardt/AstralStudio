import HeaderComponent from "@/components/HeaderComponent"
import HomeInicialComponent from "@/components/HomeInicialComponent"
import DestaquesComponent from "@/components/DestaquesComponent"
import FooterComponent from "@/components/FooterComponent"
import ValoresComponent from "@/components/ValoresComponent"
import BuscarMaisComponent from "@/components/BuscarMaisComponent"


export default function Home() {
  return (
    <>
    
      <HeaderComponent />
      <HomeInicialComponent />
      <BuscarMaisComponent />
      <DestaquesComponent />
      <ValoresComponent />
      <FooterComponent />
    </>
  )
}