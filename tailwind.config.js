/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f2ff",
          100: "#b3d9ff",
          200: "#80c1ff",
          300: "#4da8ff",
          400: "#1a90ff",
          500: "#0077e6",
          600: "#005cb3",
          700: "#004080",
          800: "#00254d",
          900: "#000a1a",
        },
        secondary: {
          50: "#e6ffe6",
          100: "#b3ffb3",
          200: "#80ff80",
          300: "#4dff4d",
          400: "#1aff1a",
          500: "#00e600",
          600: "#00b300",
          700: "#008000",
          800: "#004d00",
          900: "#001a00",
        },
        accent: {
          50: "#fffff0",
          100: "#ffffd6",
          200: "#ffffad",
          300: "#ffff85",
          400: "#ffff5c",
          500: "#ffff33",
          600: "#e6e600",
          700: "#cccc00",
          800: "#999900",
          900: "#666600",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 3s infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
