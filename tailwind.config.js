/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url(../src/images/Home-Default.png)",
        'search': "url(../src/images/Search-Default.png)",
        'network': "url(../src/images/Network-Default.png)",
        'trade': "url(../src/images/Trade-Default.png)",
        'manage': "url(../src/images/Manage-Default.png)",
        'home-hover': "url(../src/images/Home-Hover.png)",
        'search-hover': "url(../src/images/Search-Hover.png)",
        'network-hover': "url(../src/images/Network-Hover.png)",
        'trade-hover': "url(../src/images/Trade-Hover.png)",
        'manage-hover': "url(../src/images/Manage-Hover.png)",
        'arrow-down': "url(../src/images/arrow-down.svg)",
      },
      backgroundSize: {
        '3': '1.5rem',
        '4': '2rem',
      },
      backgroundPosition: {
        'right-2': 'right 0.65rem center',
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
      },
      gridRowEnd: {
        '9': '9',
        '10': '10',
      },
      colors: {
        'negotiating': '#F38452',
        'executing': '#8BE11A',
        'completed': '#01A7FF',
        'importer': '#FF7E79',
        'exporter': '#A8ADFF',
        'supplier': '#0091A2',
        'customer': '#FFAD00',
        'orangered': '#ff4500',
        'light-blue': '#0DA8FD',
      },
      backgroundColor: {
        'btn-default': 'rgba(0, 208, 215, 0.4)',
        'btn-hover': 'rgba(0, 208, 215, 0.7)',
        'btn-active': 'rgba(0, 208, 215)',
        'btn-disabled': 'rgba(0, 208, 215, 0.2)',
        'radio-btn-disabled': 'rgba(255, 69, 0, 0.65)',
      },
      width: {
        '4.5': '1.125rem;', /* 18px */
        '19/20': '95%',
        '3/10': '30%',
        '42': '10.5rem;',
        '58': '14.5rem;',
        '154': '38.5rem;', /* 616px */
        '224': '56rem',
        '223': '55.75rem',
      },
      height: {
        '4.5': '1.125rem;', /* 18px */
        '1/10': '10%',
        '9/10': '90%',
        '19/20': '95%',
      },
      margin: {
        'neg-1.25': '-0.3125rem',
        'neg-2.55': '-0.75rem',
        'neg-3.5': '-0.875rem;',
        'neg-3.75': '-0.9375rem;',
        'neg-4': '-1rem;',
      },
      borderWidth: {
        '3': '3px;',
      },
      strokeWidth: {
        '3': '3;',
      }
    },
  },
  plugins: [],
}

