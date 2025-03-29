import OurProcess from "@/components/sections/services/OurProcess"
import OurProjects from "@/components/sections/services/OurProjects"
import ServicesMain from "@/components/sections/services/ServicesMain"
import WhatWeProvide from "@/components/sections/services/what-we-provide/WhatWeProvide"

const ServicesPage = () => {
  return (
    <div className="flex flex-col w-full">
      <ServicesMain />
      <WhatWeProvide />
      <OurProcess />
      <OurProjects />
    </div>
  )
}

export default ServicesPage