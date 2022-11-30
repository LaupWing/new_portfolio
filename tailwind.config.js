/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors:{
            "background-primary": "#0e1217",
            "background-secundair": "#1c1f26",
            "accent": "#a8b3cf",
         }
      },
   },
   plugins: [],
}
