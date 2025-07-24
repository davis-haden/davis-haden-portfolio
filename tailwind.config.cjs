module.exports = {
  darkMode: 'class', // Keep 'class' to allow dark styles, but always apply 'dark' class in App.jsx
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};