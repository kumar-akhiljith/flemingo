/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61",
        secondary: "#4ECDC4",
        background: "#F7FFF7",
        text: "#1A1A1A",
      },
    },
  },
  plugins: [],
}