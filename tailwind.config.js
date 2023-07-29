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
        '4': '2rem',
      },
      backgroundPosition: {
        'right-2': 'right 0.65rem center',
      },
      gridTemplateRows: {
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
      }
    },
  },
  plugins: [],
}

