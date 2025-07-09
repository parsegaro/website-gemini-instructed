/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#14B8A6',      // Turquoise
        'primary-dark': '#0D9488', // Darker Turquoise
        'primary-light': '#5EEAD4',// Lighter Turquoise
        'background': '#F8FAFC',  // Light Gray
        'surface': '#FFFFFF',      // White
        'text-heading': '#1E293B', // Dark Slate
        'text-body': '#334155',    // Medium Slate
        'border': '#CBD5E1',      // Light Slate Border
        'success': '#16A34A',      // Green
        'error': '#DC2626',        // Red
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
