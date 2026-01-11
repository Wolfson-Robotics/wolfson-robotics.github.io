/** @type {import('flowbite').FlowbiteOptions} */
module.exports = {
  darkMode: false,
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "node_modules/flowbite-svelte/**/*.{js,svelte,ts}"
  ],
  plugins: [require('flowbite/plugin')],
};