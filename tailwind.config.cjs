/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,mjs,cjs,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		screens: {
			'xs': '320px',

			'sm': '560px',

			'md': '768px',

			'lg': '1024px',

			'xl': '1024px',

			'2xl': '1280px',
		},
		extend: {},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
		fontSize: {
			'sm': '13px',
			'xs': '15px',
			'md': '17px',
			'lg': '19px',
			'xl': '21px',
			'2xl': '23px',
		}
	},
	plugins: [
		require('flowbite/plugin')
	]
}