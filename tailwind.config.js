module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#A7C0CD",
        pink: "#F76C6C",
        red: "#B23850",
        "dark-blue": "#374785",
      },
    },
  },
  variants: {
    ".text-dark-blue": ["responsive", "hover", "focus", "active"],
    ".bg-dark-blue": ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
