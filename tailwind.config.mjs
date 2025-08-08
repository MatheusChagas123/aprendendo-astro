/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  teste: {
			950: '#f7f0d3',
			900: '#f6f6f6',
			normal: '#201201',
		  },
		},
		fontFamily: {
		  titulo: ['"Forum"', 'cursive'], // Fonte para títulos
		  textNormal: ['"arial', 'sans-serif'], // Fonte para texto normal
		},
	  },
	},
	plugins: [],
  };