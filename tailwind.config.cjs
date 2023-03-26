/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#0a0a0b",
      gray: "#2d3037",
      yellow: "#fbe84f",
      white: "#ffffff",
      "text-gray": "#a0a0a0",
      "black-50": "rgba(0,0,0,0.6)",
    },
    spacing: {
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      8: "8px",
      9: "9px",
      10: "10px",
      12: "12px",
      16: "16px",
      32: "32px",
      48: "48px",
      450: "450px",
      550: "550px",
    },
    extend: {},
  },
  plugins: [],
};
