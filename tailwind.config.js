module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FF0000',    // Example primary color
        secondary: '#00FF00',  // Example secondary color
        // Add more color definitions as needed

        themeBlue:'#114461',
        themeGreen:'#62c157',
        themeWhite:'#eef9ff',
        themeDarkBlue:"#021432",
      },
    },
  },
  plugins: [],
};
