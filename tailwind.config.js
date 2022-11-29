/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#2563eb',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
