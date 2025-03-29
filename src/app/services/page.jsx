import OurServices from "@/components/sections/home/OurServices"
import ServicesMain from "@/components/sections/services/ServicesMain"

const ServicesPage = () => {
  return (
    <div className="flex flex-col w-full">
      <ServicesMain />
      <OurServices />
    </div>
  )
}

export default ServicesPage