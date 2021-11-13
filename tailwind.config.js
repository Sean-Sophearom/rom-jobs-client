module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'"],
      },
      transitionProperty: {
        height: "max-height",
      },
      keyframes: {
        onLoadAnimation: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: { onLoadAnimation: "onLoadAnimation 1.5s ease" },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
