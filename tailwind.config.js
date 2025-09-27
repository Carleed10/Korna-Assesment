// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // 👈 scan the root HTML file
    "./src/**/*.{js,ts,jsx,tsx}" // 👈 scan all files in src
  ],
  theme: {
    extend: {}, // add custom colors, fonts, etc. here
  },
  plugins: [],
}
