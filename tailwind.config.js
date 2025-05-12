// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	  "./index.html"
	],
	theme: {
	  extend: {
		colors: {
		  'aho-red': {
			50: '#FEF2F2',
			100: '#FEE2E2',
			500: '#DC2626',
			600: '#BE1E2D',  // Colore principale del brand
			700: '#B91C1C',
			800: '#991B1B',
			900: '#7F1D1D',
		  },
		  'aho-amber': {
			50: '#FFFBEB',
			100: '#FEF3C7',
			200: '#FDE68A',
			300: '#FCD34D',
			500: '#F59E0B',
		  },
		},
		fontFamily: {
		  sans: ['Montserrat', 'sans-serif'],
		  display: ['Playfair Display', 'serif'],
		},
		animation: {
		  'bounce-once': 'bounce 1s ease-in-out 1',
		  'fade-in': 'fadeIn 0.5s ease-in-out',
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		},
		backgroundImage: {
		  'pizza-pattern': "url('/images/pizza-pattern.png')",
		},
	  },
	},
	plugins: [],
  }