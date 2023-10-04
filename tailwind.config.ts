// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#ACABAD',
          25: '#939396',
          50: '#7C7C8C',
          75: '#1D2047',
        },
        secondary: {
          0: '#fafafa',
          10: '#EBEBFB',
          25: '#98A1CA'
        }
      },
    },
  },
  variants: {},
  plugins: [],
}