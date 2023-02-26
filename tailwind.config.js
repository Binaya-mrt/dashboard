/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: {
          primary: "#45b8ea",
          secondary: "rgba(43,184,214,.1)",
        },
      },
    },
  },
  plugins: [],
};
