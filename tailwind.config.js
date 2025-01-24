/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    // './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ee8584',
          background: '#FF8A8A',
          100: '#93c5fd',
          200: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
};
