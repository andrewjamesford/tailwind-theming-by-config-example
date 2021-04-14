const { themeVariants } = require("tailwindcss-theme-variants");
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
				alpha: {
					colour1: 'azure',
					
				},
				beta: {
					colour1: 'green',
					
				},
        gamma: {
					colour1: 'ghostwhite',					
				},
      }
    },
  },
  variants: {
    backgroundColor: ['schemes'],
		borderColor: ['schemes'],
		textColor: ['schemes'],
    extend: {},
  },
  // fallback: "compact",
  plugins: [
    themeVariants({
      group: "schemes",
      themes: {
          alpha: {
              selector: ".alpha",
          },
          beta: {
              selector: ".beta",
          },
          gamma: {
            selector: ".gamma",
        },
      },
  }),
  ],
}
