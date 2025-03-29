import ScheduleACall from "@/components/sections/about/ScheduleACall";
import LocationSection from "@/components/sections/contact/LocationSection";
import ContactUsSection from "@/components/sections/home/ContactUsSection";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <LocationSection />
      <ScheduleACall />
      <ContactUsSection />
    </div>
  );
};

export default ContactPage;
