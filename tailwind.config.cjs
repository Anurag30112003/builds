/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'first': '#1f1c1c',
				'second': '#f3f8ff',
				'third': '#8e84d0',
			},
			screens: {
				sm: "450px",
		
				md: "768px",
		
		
				lg: "1350px",
			  },
		},
	},
	plugins: [],
}