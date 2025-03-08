/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4299e1', // light blue
          DEFAULT: '#3182ce', // medium blue
          dark: '#2c5282', // dark blue
        },
        secondary: {
          light: '#9ae6b4', // light green
          DEFAULT: '#48bb78', // medium green
          dark: '#2f855a', // dark green
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      minHeight: {
        '96': '24rem',
      },
    },
  },
  plugins: [],
}