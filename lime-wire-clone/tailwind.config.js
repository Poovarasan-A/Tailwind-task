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
        primary: "#008444",
        secondary: "#4C66D1",
        tertiary: "#FCFCFD",
        quaternary: "#667085",
        main: "#F9FAFB",
        button: "#E5E5E5",
        halfgreen: "#E6F4ED",
      },
    },
  },
  plugins: [],
};
