/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small screens and up
        md: "768px", // Medium screens and up
        lg: "1024px", // Large screens and up
        xl: "1280px", // Extra large screens and up
        "2xl": "1536px", // 2X large screens and up
        xxl: "1800px", // Custom: screens larger than 1800px
      },
      keyframes: {
        "scroll-mouse": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(24px)" },
          "100%": { transform: "translateY(-0)" },
        },
      },
      animation: {
        "scroll-mouse": "scroll-mouse 1.5s infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBg: "#EEEFF7",
        secondaryBg: "#023046",
        tertiaryBg: "#F7B801",
        primaryTextColor: "#1D234E",
        secondarytTextColor: "#F7B801",
      },
    },
  },
  plugins: [],
};
