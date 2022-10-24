/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "gray-25": "#FCFCFD",
      "gray-50": "#F9FAFB",
      "gray-100": "#F2F4F7",
      "gray-200": "#EAECF0",
      "gray-300": "#D0D5DD",
      "gray-400": "#98A2B3",
      "gray-500": "#667085",
      "gray-600": "#475467",
      "gray-700": "#344054",
      "gray-800": "#1D2939",
      "gray-900": "#101828",
    },
    extend: {
      fontSize: {
        "text-xs": ["8px", { lineHeight: "16px" }],
        "text-sm": ["12px", { lineHeight: "18px" }],
        "text-md": ["14px", { lineHeight: "20px" }],
        "text-lg": ["16px", { lineHeight: "24px" }],
        "text-xl": ["18px", { lineHeight: "28px" }],
        "display-xs": ["20px", { lineHeight: "30px" }],
        "display-sm": ["24px", { lineHeight: "32px" }],
        "display-md": ["30px", { lineHeight: "38px" }],
        "display-lg": ["36px", { lineHeight: "44px" }],
        "display-lg": ["48px", { lineHeight: "60px" }],
        "display-2xl": ["60px", { lineHeight: "72px" }],
      },
    },
  },
  plugins: [],
};
