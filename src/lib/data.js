import Image from "next/image";

export const headerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const projectsList = [
  {
    id: 1,
    image: "/portfolio/1.png",
    type: "Washing Machine Repair",
    title: "Samsung Washing Machine Repair",
    desc: "Specialized repair services for Samsung washing machines, including drum repairs, motor replacements, and electronic control board fixes. Our certified technicians ensure your washing machine operates at peak performance with manufacturer-approved parts and expert diagnostics.",
    detailsLink: "/services/washing-machine",
    review: {
      username: "Sarah Thompson",
      designation: "Homeowner",
      comment: "Excellent same-day service for my Samsung washing machine. Very professional and knowledgeable technician.",
    },
  },
  {
    id: 2,
    image: "/portfolio/2.png",
    type: "Refrigerator Repair",
    title: "Bosch Refrigerator Service",
    desc: "Expert repair solutions for Bosch refrigerators, covering cooling system repairs, compressor issues, and temperature control problems. We provide comprehensive diagnostics and repairs using genuine Bosch parts.",
    detailsLink: "/services/refrigerator",
    review: {
      username: "Michael Chen",
      designation: "Restaurant Owner",
      comment: "Reliable and quick service. Fixed our Bosch fridge efficiently, saving us from potential food loss.",
    },
  },
  {
    id: 3,
    image: "/portfolio/3.png",
    type: "Dishwasher Repair",
    title: "Siemens Dishwasher Repair",
    desc: "Professional repair services for Siemens dishwashers, including water inlet problems, drainage issues, and cleaning system repairs. Our team specializes in all Siemens models with guaranteed workmanship.",
    detailsLink: "/services/dishwasher",
    review: {
      username: "Emma Davis",
      designation: "Home Chef",
      comment: "Outstanding service! Fixed my Siemens dishwasher quickly and explained everything clearly.",
    },
  },
];

export const categories = [
  "TV Repair",
  "Washing Machine Repair",
  "Dryer Repair",
  "Dishwasher Repair",
  "Oven Repair",
  "Refrigerator Repair",
  "Stove/Cooker Repair"
];

export const processData = [
  {
    icon: (
      <Image
        src="/process-icons/1.png"
        width={24}
        height={24}
        alt="diagnosis icon"
      />
    ),
    title: "Initial Diagnosis",
    image: "/static/solar-3.webp",
    desc: "Our expert technicians perform a thorough assessment of your appliance to identify the exact issue and provide an accurate quote for repairs.",
  },
  {
    icon: (
      <Image
        src="/process-icons/2.png"
        width={24}
        height={24}
        alt="quote icon"
      />
    ),
    title: "Transparent Quote",
    image: "/static/ac4.jpg",
    desc: "We provide a detailed cost breakdown with no hidden fees, ensuring you understand exactly what needs to be fixed and the associated costs.",
  },
  {
    icon: (
      <Image
        src="/process-icons/6.png"
        width={24}
        height={24}
        alt="repair icon"
      />
    ),
    title: "Professional Repair",
    image: "/static/solar-7.jpg",
    desc: "Using genuine parts and following manufacturer guidelines, our certified technicians complete the repairs with precision and care.",
  },
  {
    icon: (
      <Image
        src="/process-icons/4.png"
        width={24}
        height={24}
        alt="testing icon"
      />
    ),
    title: "Quality Testing",
    image: "/static/qualtiy.jpg",
    desc: "After repairs, we thoroughly test your appliance to ensure it's working perfectly and meets all safety standards.",
  },
  {
    icon: (
      <Image
        src="/process-icons/5.png"
        width={24}
        height={24}
        alt="warranty icon"
      />
    ),
    title: "Warranty Coverage",
    image: "/static/solar-2.jpg",
    desc: "All our repairs come with a service warranty, giving you peace of mind and ensuring long-lasting results.",
  },
  {
    icon: (
      <Image
        src="/process-icons/6.png"
        width={24}
        height={24}
        alt="support icon"
      />
    ),
    title: "After-Service Support",
    image: "/static/support.webp",
    desc: "We provide maintenance tips and ongoing support to help prevent future issues and extend your appliance's lifespan.",
  },
];
