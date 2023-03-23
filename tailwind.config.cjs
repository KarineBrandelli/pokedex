/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      yellow: colors.yellow,

      bug: colors.lime,
      ice: colors.cyan,
      fire: colors.red,
      dark: colors.zinc,
      water: colors.sky,
      fairy: colors.pink,
      steel: colors.slate,
      grass: colors.green,
      rock: colors.emerald,
      ghost: colors.violet,
      ground: colors.stone,
      poison: colors.purple,
      dragon: colors.orange,
      fighting: colors.rose,
      normal: colors.neutral,
      electric: colors.amber,
      flying: colors.fuchsia,
      psychic: colors.indigo,
    },
    extend: {},
  },
  plugins: [],
};
