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
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Services",
    href: "/services",
  },
];

export const projectsList = [
  {
    id: 1,
    image: "/portfolio/1.png",
    type: "Web Development",
    title: "Marvallex Gold",
    desc: "Marvellex Gold is a global leader in gold trading, offering secure and innovative investment opportunities. The company specializes in the acquisition, storage, and sale of high-quality gold, ensuring transparency and reliability for investors. With a mission to bridge traditional gold investment with modern financial solutions, Marvellex Gold integrates blockchain technology to enhance security and accessibility. Their platform provides real-time tracking, secure transactions, and expert financial guidance. Backed by a strong reputation and ethical sourcing practices.",
    detailsLink: "/portfolio/project/1",
    link: "https://marvellexgold.com/",
    review: {
      username: "Jane Coder",
      designation: "Web Developer",
      comment:
        "Web development is the art of crafting a digital world, where creativity meets technology.",
    },
  },
  {
    id: 2,
    image: "/portfolio/2.png",
    type: "Web Development",
    title: "Marvellex Welfare",
    desc: "Marvellex Welfare is a humanitarian organization dedicated to uplifting underprivileged communities through education, healthcare, and social empowerment initiatives. The organization works on various philanthropic projects, including scholarships, medical aid, and vocational training programs, to create lasting change. Their vision is to provide equal opportunities and improve living standards for marginalized groups, making a significant impact in poverty reduction and community well-being.",
    detailsLink: "/portfolio/project/2",
    link: "https://marvellexwelfare.com/",
    review: {
      username: "John Doe",
      designation: "Social Media Manager",
      comment:
        "Social media branding is the key to unlocking the potential of digital marketing.",
    },
  },
  {
    id: 3,
    image: "/portfolio/3.png",
    type: "Web Development",
    title: "Marvellex Ventures",
    desc: "Marvellex Ventures is an investment firm that focuses on fostering innovation and economic growth across various industries. The company specializes in funding and supporting startups, technology advancements, and business expansions with strategic financial planning. Their portfolio spans sectors such as fintech, blockchain, real estate, and energy, enabling businesses to scale effectively. By leveraging expertise and market insights, Marvellex Ventures provides tailored investment solutions to maximize profitability and sustainability. Their commitment to innovation and progress makes them a trusted partner for entrepreneurs and enterprises seeking to grow in competitive global markets.",
    detailsLink: "/portfolio/project/3",
    link: "https://marvellexventures.com/",
    review: {
      username: "Alice Smith",
      designation: "Web Designer",
      comment:
        "Design and development are the building blocks of the digital landscape and the key to unlocking the potential of digital technology.",
    },
  },
  {
    id: 4,
    image: "/portfolio/2.png",
    type: "Web Development",
    title: "Royal Imperial Gold",
    desc: "Royal Imperial Gold is a luxury gold trading company that specializes in high-quality gold investments and wealth preservation. With a strong focus on ethical sourcing and transparency, the company ensures secure transactions for its clients. Royal Imperial Gold offers a range of gold investment solutions, including bars, coins, and digital gold-backed assets, catering to both individual and institutional investors. Their expertise in the precious metals industry, coupled with innovative financial services, positions them as a trusted partner in wealth management and asset security.",
    detailsLink: "/portfolio/project/4",
    link: "https://royalimperialgold.com/",
    review: {
      username: "Bob Johnson",
      designation: "Web Developer",
      comment:
        "Web development is the backbone of the digital world, where creativity meets technology.",
    },
  },
  {
    id: 5,
    image: "/portfolio/5.png",
    type: "Web Development",
    title: "Flight One",
    desc: "Flight One is a premium travel and aviation service provider, offering seamless flight booking, private jet charters, and customized travel experiences. The company specializes in high-end travel solutions for business and luxury travelers, ensuring comfort, efficiency, and top-tier customer service. With a focus on safety, convenience, and global reach, Flight One partners with leading airlines and aviation experts to provide unparalleled travel experiences. Whether for corporate travel or leisure, Flight One ensures that every journey is smooth, personalized, and hassle-free.",
    detailsLink: "/portfolio/project/5",
    link: "https://flightone.co/",
    review: {
      username: "Jane Coder",
      designation: "Web Developer",
      comment:
        "Web development is the art of crafting a digital world, where creativity meets technology.",
    },
  },
  {
    id: 6,
    image: "/portfolio/6.png",
    type: "App Development",
    title: "Willow International School",
    desc: "Willow International School, based in Maputo, Mozambique, is a premier educational institution committed to academic excellence and character development. Offering programs from kindergarten to A-Levels, the school focuses on fostering critical thinking, creativity, and leadership skills. Its curriculum is designed to prepare students for global opportunities, with a strong emphasis on holistic growth and extracurricular activities. Willow International School is known for its student success stories, with graduates securing placements in top universities worldwide. The school aims to empower the next generation with knowledge, innovation, and a strong ethical foundation.",
    detailsLink: "/portfolio/project/6",
    link: "https://willow.edu.mz/",
    review: {
      username: "Sarah Johnson",
      designation: "App Developer",
      comment:
        "App development is the key to unlocking the potential of digital technology.",
    },
  },
  {
    id: 7,
    image: "/portfolio/7.png",
    type: "Web Development",
    title: "Serene Heights Nathia Gali",
    desc: "Serene Heights Nathia Gali is Pakistan’s largest winter resort, offering luxurious accommodations in the scenic highlands of Nathia Gali. Located near PAF Kalabagh Airbase, the resort features over 150 fully furnished apartments across three towers, providing 1, 2, and 3-bedroom options. Guests enjoy more than 50 premium amenities, including 24/7 power backup, concierge services, and adventure activities. Positioned at an altitude of 7,906 feet, the resort is easily accessible from key locations, including Islamabad and Abbottabad. Investors benefit from rental income and complimentary stays annually. With breathtaking views and world-class hospitality, Serene Heights offers an unparalleled retreat for nature lovers and adventure seekers",
    detailsLink: "/portfolio/project/7",
    link: "https://sereneheightsnathiagali.com/",
    review: {
      username: "Alice Smith",
      designation: "Web Designer",
      comment:
        "Design and development are the building blocks of the digital landscape.",
    },
  },
  {
    id: 8,
    image: "/portfolio/8.png",
    type: "Design & Development",
    title: "Pixact: UI/UX Design and Development",
    desc: "For Pixact, a software house, we designed a sleek and modern aesthetic using purple and white colors. The clean, minimalistic design with graphic elements enhances user experience, aligning with Pixact’s focus on innovative UI/UX design and development.",
    detailsLink: "/portfolio/project/8",
    link: "/portfolio/project/8",
    review: {
      username: "Bob Johnson",
      designation: "Web Developer",
      comment:
        "Web development is the backbone of the digital world, where creativity meets technology.",
    },
  },
  {
    id: 9,
    image: "/portfolio/9.png",
    type: "Design & Development",
    title: "Serene Heights: Residential Development Design",
    desc: "For Serene Heights, a luxurious residential, we developed a design that embodies tranquility and modern elegance. Utilizing a soothing green and white color palette, the design features clean typography and sleek, contemporary layouts. This approach enhances user experience and reflects Serene Heights' commitment to providing serene and sophisticated living spaces.",
    detailsLink: "/portfolio/project/8",
    link: "/portfolio/project/8",
    review: {
      username: "Bob Johnson",
      designation: "Web Developer",
      comment:
        "Web development is the backbone of the digital world, where creativity meets technology.",
    },
  },
  {
    id: 10,
    image: "/portfolio/10.png",
    type: "Design & Development",
    title: "Lonetex: Cleaning Mop Product Photography and Design",
    desc: "For Lonetex, a company specializing in cleaning mops, we developed a design that highlights their products' functionality and aesthetic appeal. Employing a light mustard and navy color scheme, the design features high-quality images of Lonetex's mops set against clean, uncluttered backgrounds. This approach emphasizes the simplicity and effectiveness of their products, aligning with Lonetex's commitment to providing efficient cleaning solutions.",
    detailsLink: "/portfolio/project/8",
    link: "/portfolio/project/8",
    review: {
      username: "Bob Johnson",
      designation: "Web Developer",
      comment:
        "Web development is the backbone of the digital world, where creativity meets technology.",
    },
  },
  {
    id: 11,
    image: "/portfolio/11.png",
    type: "Design & Development",
    title: "Fahad Masud Lone.",
    desc: "For Fahad Masud Lone, we crafted a content strategy centered around personal growth and motivation. The visuals feature clean, professional designs with a focus on empowering messages. Using a minimalist color palette and modern typography, the content aims to inspire and engage his audience, promoting his coaching services, motivational talks, and personal development programs. The sleek graphics reflect the motivational nature of his work, designed to resonate with individuals seeking personal and professional growth.",
    detailsLink: "/portfolio/project/8",
    link: "/portfolio/project/8",
    review: {
      username: "Bob Johnson",
      designation: "Web Developer",
      comment:
        "Web development is the backbone of the digital world, where creativity meets technology.",
    },
  },
  {
    id: 12,
    image: "/portfolio/12.png",
    type: "Design & Development",
    title: "Marvellex Welfare: Educational Outreach and Community Engagement",
    desc: "We created impactful graphics for Marvellex Welfare, focusing on promoting education and community development. Using blue and white tones, the designs convey trust, incorporating images of students and schools. Clean typography and modern layouts highlight the organization’s commitment to enhancing learning environments.",
    detailsLink: "/portfolio/project/8",
    link: "/portfolio/project/8",
    review: {
      username: "Bob Johnson",
      designation: "Web Developer",
      comment:
        "Web development is the backbone of the digital world, where creativity meets technology.",
    },
  },
  {
    id: 13,
    image: "/portfolio/13.png",
    type: "Design & Development",
    title: "SAL Accounting: Professional Financial Services Branding",
    desc: "For SAL Accounting, we developed a clean and professional design that reflects the company's expertise in financial services. The graphics feature a sophisticated color palette, with blue tones symbolizing trust and reliability. Sleek typography and minimalistic design elements ensure clarity and professionalism, highlighting SAL Accounting's commitment to providing expert financial solutions. The content aims to engage potential clients, promoting the company’s services while maintaining a polished, authoritative look.",
    detailsLink: "/portfolio/project/8",
    link: "/portfolio/project/8",
    review: {
      username: "Bob Johnson",
      designation: "Web Developer",
      comment:
        "Web development is the backbone of the digital world, where creativity meets technology.",
    },
  },
];

export const categories = [
  "Web Development",
  "Design & Development",
  "App Development",
  "Video Editing",
  "Graphic Designing",
  "Social Media Branding",
];

export const processData = [
  {
    icon: (
      <Image
        src="/process-icons/1.png"
        width={24}
        height={24}
        alt="process icon"
      />
    ),
    title: "Discover and Strategize",
    desc: "Embark on a journey through the digital landscape with our Industry Insight Exploration. We delve into the market, scouting the strategies of your peers to ensure your brand stands out.",
  },
  {
    icon: (
      <Image
        src="/process-icons/1.png"
        width={24}
        height={24}
        alt="process icon"
      />
    ),
    title: "Discover and Strategize",
    desc: "Embark on a journey through the digital landscape with our Industry Insight Exploration. We delve into the market, scouting the strategies of your peers to ensure your brand stands out.",
  },
  {
    icon: (
      <Image
        src="/process-icons/1.png"
        width={24}
        height={24}
        alt="process icon"
      />
    ),
    title: "Discover and Strategize",
    desc: "Embark on a journey through the digital landscape with our Industry Insight Exploration. We delve into the market, scouting the strategies of your peers to ensure your brand stands out.",
  },
  {
    icon: (
      <Image
        src="/process-icons/1.png"
        width={24}
        height={24}
        alt="process icon"
      />
    ),
    title: "Discover and Strategize",
    desc: "Embark on a journey through the digital landscape with our Industry Insight Exploration. We delve into the market, scouting the strategies of your peers to ensure your brand stands out.",
  },
  {
    icon: (
      <Image
        src="/process-icons/1.png"
        width={24}
        height={24}
        alt="process icon"
      />
    ),
    title: "Discover and Strategize",
    desc: "Embark on a journey through the digital landscape with our Industry Insight Exploration. We delve into the market, scouting the strategies of your peers to ensure your brand stands out.",
  },
  {
    icon: (
      <Image
        src="/process-icons/1.png"
        width={24}
        height={24}
        alt="process icon"
      />
    ),
    title: "Discover and Strategize",
    desc: "Embark on a journey through the digital landscape with our Industry Insight Exploration. We delve into the market, scouting the strategies of your peers to ensure your brand stands out.",
  },
];
