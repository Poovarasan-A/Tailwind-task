/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "370px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1300px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        "bg-color": "#030A25",
        line: "#AC46F6",
        primary: "#040D30",
        secondary: "#4C66D1",
        light: "#42518F",
        "button-border": "#A4B6FF",
      },
    },
  },
  plugins: [],
};
