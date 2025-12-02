/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#15803d',
        'primary-foreground': '#ffffff',
        secondary: '#bbf7d0',
        'secondary-foreground': '#14532d',
        muted: '#dcfce7',
        'muted-foreground': '#6b7280',
        accent: '#86efac',
        'accent-foreground': '#14532d',
        background: '#f0fdf4',
        foreground: '#1f2937',
        card: '#ffffff',
        'card-foreground': '#1f2937',
        border: '#86efac',
        ring: '#15803d',
      },
    },
  },
  plugins: [],
}
