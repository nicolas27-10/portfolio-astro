export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    colors: {
      background: '#18181b',
      primary: {
        DEFAULT: '#7c3aed',
        light: '#a78bfa',
        dark: '#4c1d95',
      },
      accent: '#c4b5fd',
      text: {
        DEFAULT: '#f3f4f6',
        muted: '#d1d5db',
      },
    },
    extend: {
      fontFamily: {
        'onest': ['Onest Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 