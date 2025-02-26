/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx,js,jsx,html}',
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
			colors: { 'primary-background': '#0E0012', 'secondary-bg': '#1A0021', 'primary': '#6D43FF', 'primary-faded': '#6d43ff80' },
			container: {
				center: true,
			},
			width: {
				500: '500px'
			},
			backgroundImage: {
        		'hero-pattern': "url('/Group3.svg')",
      		},
			dropShadow: {
				//'purple-ds': '0 4px 30px rgba(109,67,255,100)',
				'3xl': '0 4px 30px rgba(109, 67, 255, 1)',

			},
		},
		safelist: [
			"shadow-xl",
			"shadow-indigo-500/50"
		],
	},
	plugins: [],
};

