/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        primary: "#FB2E86",
        tertiary: "#7E33E0",
        textPrimary: "#0D0E43",
      },
    },
  },
  plugins: [],
};
