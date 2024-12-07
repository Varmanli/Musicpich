/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-pattern": "url('./src/images/hero-img.png')",
      },
      fontFamily: {
        shabnam: ["Shabnam", "sans-serif"], // تعریف فونت
      },
    },
  },
  plugins: [],
};
