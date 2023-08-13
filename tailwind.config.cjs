/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        nav: "#81e7eb",
        footer: "#418370",
        gallery: "#d7e6e0",
        // Agrega más variables de color aquí si lo necesitas
      },
    },
  },
  plugins: [],
};
