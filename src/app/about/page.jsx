import AboutMain from "@/components/sections/about/AboutMain"
import ScheduleACall from "@/components/sections/about/ScheduleACall"
import TransformingSection from "@/components/sections/about/TransformingSection"
import DeliveringSection from "@/components/sections/home/delivering-section/DeliveringSection"
import ProcessSection from "@/components/sections/home/process-section/ProcessSection"

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      <AboutMain />
      <DeliveringSection />
      <TransformingSection />
      <ProcessSection />
      <ScheduleACall />
    </div>
  )
}

export default AboutPage