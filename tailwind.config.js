/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // මෙතනින් තමයි Poppins font එක මුළු site එකටම set කරන්නේ
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 25px 75px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
}