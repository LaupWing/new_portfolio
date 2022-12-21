/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: "jit",
   darkMode: "class",
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
   safelist: [
      "-translate-x-0", 
      "-translate-x-2", 
      "-translate-x-4",
      "-translate-x-6",
      "-translate-x-8",
      "-translate-x-10",
      "-translate-x-12",
      "-translate-x-14",
   ],
   theme: {
      fontFamily: {
         sans: ["Fira Code", "sans-serif"],
         serif: ["VT323", "sans-serif"],
      },
      extend: {
         colors: {
            "background-primary": "#0e1217",
            "background-secundair": "#1c1f26",
            "accent": "#a8b3cf",
         },
      },
   },
   plugins: [require("@tailwindcss/line-clamp")],
}
