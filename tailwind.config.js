module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  variants: {
    extends: {
      opacity: ["disabled"]
    }
  },
  plugins: [],
};
