const defaultTheme = require("tailwindcss/defaultTheme");

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
      backgroundImage: {
        "business-man": "url('/src/static/christopher-gower-vjMgqUkS8q8-unsplash.jpg')",
        cv: "url('/src/static/dan-dimmock-sNwnjxm8eTY-unsplash.jpg')",
        contact: "url('/src/static/bg-contact.jfif')",
        "cv-2": "url('/src/static/bg_cv_2.jpg')",
        "job-application": "url('/src/static/online-application-job-form.jpeg')",
      },
    },
    variants: {
      extend: {},
    },
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
