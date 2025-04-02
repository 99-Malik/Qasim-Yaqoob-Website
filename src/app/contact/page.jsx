"use client";

import { usePathname } from "next/navigation";

const ContactPage = () => {
  const pathname = usePathname();
  const company = pathname.split("/")[2];

  const primaryBgColor =
    company === "bosch"
      ? "bg-boschPrimary"
      : company === "siemens"
      ? "bg-siemensPrimary"
      : company === "samsung"
      ? "bg-samsungPrimary"
      : company === "lg"
      ? "bg-lgPrimary"
      : "bg-primary";

  const primaryTextColor =
    company === "bosch"
      ? "text-boschPrimary"
      : company === "siemens"
      ? "text-siemensPrimary"
      : company === "samsung"
      ? "text-samsungPrimary"
      : company === "lg"
      ? "text-lgPrimary"
      : "text-primary";

  const features = [
    {
      title: "Skilled Professionals",
      description:
        "Our certified experts stay up-to-date with the latest repair methods to deliver dependable results every time.",
    },
    {
      title: "Top-Notch Repairs",
      description:
        "We use premium-quality parts and tools to restore your appliances to peak performance.",
    },
    {
      title: "Honest Pricing",
      description:
        "Expect clear, upfront pricing with no surprises—so you'll always know what you're paying for.",
    },
    {
      title: "Convenient Scheduling",
      description:
        "We offer flexible appointment options, including same-day and emergency services, to fit your schedule.",
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "All repairs are backed by a warranty, giving you confidence and peace of mind.",
    },
    {
      title: "Reliable Support",
      description:
        "Our friendly customer care team is always ready to answer your questions and address your concerns.",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-10 items-center pt-36">
      <div className="flex items-center justify-center flex-col gap-3 py-20 max-w-7xl px-5">
        <h1 className={`text-4xl font-medium ${primaryTextColor}`}>
          Contact Us
        </h1>
        <span className="text-secondary/70">Get in touch with us</span>
        <span className={`text-center max-w-xl ${primaryTextColor}`}>
          Selecting the right appliance repair company is essential to keeping
          your home running smoothly. With our dedication to quality and years
          of expertise, we're the trusted choice for all your appliance repair
          needs. Here's what sets us apart:
        </span>
        <div className="grid gap-4 mt-6 md:grid-cols-2 w-full max-w-5xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex gap-3 p-4 rounded-lg bg-white border shadow border-${primaryBgColor}/40`}
            >
              <div
                className={`size-2 mt-2 rounded-full shrink-0 ${primaryBgColor}`}
              ></div>
              <div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="text-secondary/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
