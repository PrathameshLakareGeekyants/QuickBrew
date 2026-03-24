/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Mode
        primary: "#6F4E37",
        primaryDark: "#3E2723",
        primaryLight: "#A1887F",

        cream: "#F5E6D3",
        beige: "#EADBC8",
        latte: "#D7CCC8",

        accent: "#4E6E58",
        accentLight: "#A3B18A",

        background: "#FFF8F0",
        backgroundSecondary: "#F7F3EF",
        card: "#FFFFFF",

        textPrimary: "#1C1C1C",
        textSecondary: "#6B6B6B",
        textDisabled: "#A0A0A0",

        border: "#E0E0E0",
        divider: "#EEEEEE",

        // Dark Mode
        darkBackground: "#1C1C1C",
        darkCard: "#2A2A2A",
        darkPrimary: "#D7CCC8",
        darkAccent: "#A3B18A",

        darkTextPrimary: "#FFFFFF",
        darkTextSecondary: "#CFCFCF",
        darkBorder: "#3A3A3A",

        success: "#4CAF50",
        warning: "#FF9800",
        error: "#F44336",
        info: "#2196F3",
      },
    },
  },
  plugins: [],
};
