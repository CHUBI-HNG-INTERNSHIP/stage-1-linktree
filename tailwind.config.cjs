/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["12px", { lineHeight: "20px" }],
        sm: ["16px", { lineHeight: "16px" }],
        md: ["24px", { lineHeight: "32px" }],
        lg: ["32px", { lineHeight: "40px" }],
      },
    },
  },
  plugins: [],
};
