/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        industrial: {
          50: '#fef6ee',
          100: '#fdeadd',
          200: '#fad6bc',
          300: '#f7bd93',
          400: '#f4a261',
          500: '#f4a261', // Main Accent
          600: '#e78c4d',
          700: '#bf6b36',
          800: '#9a532d',
          900: '#7d4427',
          950: '#432313',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}