/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{css,xml,html,vue,svelte,ts,tsx}'],
  darkMode: ['class', '.ns-dark'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('android', '.ns-android &')
      addVariant('ios', '.ns-ios &')
    })
  ],
  corePlugins: {
    preflight: false // disables browser-specific resets
  }
}

