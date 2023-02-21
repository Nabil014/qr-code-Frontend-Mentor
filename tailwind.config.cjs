/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Outfit: ['Outfit']
			},
			colors: {
				lightGray: '#D6E2F0',
				darkBlue: '#1F3251',
				grayishBlue: '#7B879D'
			}
		}
	},
	plugins: []
}
