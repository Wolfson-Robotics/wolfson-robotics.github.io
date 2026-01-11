/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode so we can control it
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "node_modules/flowbite-svelte/**/*.{js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        PROOF_RED: '#ff0000',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
