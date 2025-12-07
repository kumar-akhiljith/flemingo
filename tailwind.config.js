/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.jsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FFFFFF",
          surface: "#F5F5F5",
          card: "#FFFFFF",
          border: "#E6E6E6",
          primary: "#3A76F0",
          primaryText: "#FFFFFF",
          text: "#1C1C1C",
          textSecondary: "#6A6A6A",
          input: "#EFEFEF",
        },

        dark: {
          background: "#121212",
          surface: "#1E1E1E",
          card: "#1A1A1A",
          border: "#2A2A2A",
          primary: "#3A76F0",
          primaryText: "#FFFFFF",
          text: "#FFFFFF",
          textSecondary: "#B5B5B5",
          input: "#2A2A2A",
        },
      },
    },
  },
  plugins: [],
};
