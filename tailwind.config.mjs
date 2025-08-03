/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        montserrat: "var(--font-montserrat)",
        inter: "var(--font-inter)",
      },
      colors: {
        primary: "#fbcd01",
        secondary: "#132531",
        custom: {
          gray: "#c1bcc2",
          black: "#222222",
        },

        // LG
        lgStart: "#5f001f",
        lgPrimary: "#a50034",
        lgEnd: "#ff3366",
        lgSecondary: "#000000",
        lgBlob: "#F6F3EB",

        // Samsung
        samsungStart: "#0d1a80",
        samsungPrimary: "#1428a0",
        samsungEnd: "#2b50e0",
        samsungSecondary: "#FFFFFF",
        samsungBlob: "#F7F7F7",

        // Bosch
        boschStart: "#a80000",
        boschPrimary: "#ed1c24",
        boschEnd: "#ff5f5f",
        boschSecondary: "#2D3033",
        boschBlob: "#F0F1F2",

        // Siemens
        siemensStart: "#006666",
        siemensPrimary: "#009999",
        siemensEnd: "#00cccc",
        siemensSecondary: "#FFFFFF",
        siemensBlob: "#F0F4F9",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.8)",
          },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
