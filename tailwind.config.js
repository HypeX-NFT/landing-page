/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue-HypeX': '#16162B',
        'hypex-purple': '#FF01FF',
      },
      fontFamily: {
        aldo: ['AldoApache'],
        alata: ['Alata'],
        body: ['Gothic'],
      },
      dropShadow: {
        icon: '4px 4px 4px rbga(0,0,0,0.7)',
      },
      maxHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      maxWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
