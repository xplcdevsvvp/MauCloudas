module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004b6b',
        secondary: '#006799',
        accent: '#6a00ff',
        dark: '#0a192f',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #004b6b, #006799)',
      },
    },
  },
  plugins: [],
};