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
        sm: "340px", // Small screens and up
        md: "768px", // Medium screens and up
        lg: "1024px", // Large screens and up
        xl: "1280px", // Extra large screens and up
        "2xl": "1490px", // 2X large screens and up
        xxl: "1800px", // Custom: screens larger than 1800px
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "scroll-mouse": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(24px)" },
          "100%": { transform: "translateY(-0)" },
        },
        ping: {
          "0%": {
            transform: "scale(1)",
            opacity: 1,
          },
          "25%": { transform: "scale(1.2)", opacity: 1 },
          "50%": { transform: "scale(1.4)", opacity: 1 },
          "75%": { transform: "scale(1.5)", opacity: 0.8 },
          "100%": {
            transform: "scale(1.7)",
            opacity: 0,
          },
        },
      },
      animation: {
        "scroll-mouse": "scroll-mouse 1.5s infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        fade: "fade 0.5s ease-in-out",
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
