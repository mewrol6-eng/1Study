/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary": "#13ecc8",
        "background-light": "#f6f8f8",
        "surface-light": "#ffffff",
        "background-dark": "#10221f",
        "brand-teal": "#14b8a6",
        "brand-blue": "#3b82f6",
        "primary-dark": "#002B5B",
        "academic-blue": "#0A84FF",
        "academic-green": "#34C759",
        "academic-orange": "#FF9F0A",
        "academic-gray": "#4B5563",
        "academic-border": "#D1D5DB",
        "card-light": "#ffffff",
        "card-dark": "#1a3833",
        "text-main-light": "#111817",
        "text-main-dark": "#ffffff",
        "text-sub-light": "#637588",
        "text-sub-dark": "#9ca3af",
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"],
        "sans": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
