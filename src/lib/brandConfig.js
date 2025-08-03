export function getBrandConfig(brand) {
  switch (brand?.toLowerCase()) {
    case "lg":
      return {
        name: "LG",
        logo: "/lg-logo.webp",
        gradient: "from-[#a50034] to-[#e6004c]",
        textColor: "text-[#a50034]",
        borderColor: "border-[#a50034]",
        bgGradient: "from-[#a50034] to-[#e6004c]",
      };
    case "samsung":
      return {
        name: "Samsung",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
        gradient: "from-[#1428a0] to-[#1c51ce]",
        textColor: "text-[#1428a0]",
        borderColor: "border-[#1428a0]",
        bgGradient: "from-[#1428a0] to-[#1c51ce]",
      };
    case "bosch":
      return {
        name: "Bosch",
        logo: "/bosch-logo.png",
        gradient: "from-[#e2231a] to-[#b51f1a]",
        textColor: "text-[#e2231a]",
        borderColor: "border-[#e2231a]",
        bgGradient: "from-[#e2231a] to-[#b51f1a]",
      };
    case "siemens":
      return {
        name: "Siemens",
        logo: "/siemens.png",
        gradient: "from-[#009999] to-[#005f5f]",
        textColor: "text-[#009999]",
        borderColor: "border-[#009999]",
        bgGradient: "from-[#009999] to-[#005f5f]",
      };
    default:
      return {
        name: "UAE",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/UAE_logo.svg/1200px-UAE_logo.svg.png",
        gradient: "from-emerald-600 to-teal-600",
        textColor: "text-emerald-600",
        borderColor: "border-emerald-600",
        bgGradient: "from-emerald-800 to-teal-700",
      };
  }
}
