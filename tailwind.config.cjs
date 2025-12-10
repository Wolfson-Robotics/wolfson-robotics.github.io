/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // disable dark mode completely
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "node_modules/flowbite-svelte/**/*.{js,svelte,ts}"
  ],
  theme: { extend: {} },
  plugins: [require('flowbite/plugin')],
};
