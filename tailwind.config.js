/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
