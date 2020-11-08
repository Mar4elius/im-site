module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "light-grey": "#A7C0CD",
        "custom-pink": "#F76C6C",
        "custom-red": "#B23850",
        "dark-blue": "#374785",
      },
      width: {
          '68': '20rem'
      }
    },
  },
  variants: {
    ".text-dark-blue": ["responsive", "hover", "focus", "active"],
    ".bg-dark-blue": ["responsive", "hover", "focus", "active"],
    "text-custom-red": ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
