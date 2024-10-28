// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FDD835',     // Light Amber Yellow
          DEFAULT: '#F9A825',   // Amber Yellow
          dark: '#F57F17',      // Darker Amber
        },
        accent: {
          light: '#FFA726',     // Light Orange
          DEFAULT: '#FB8C00',   // Orange
          dark: '#EF6C00',      // Darker Orange
        },
        background: '#FFF3E0',  // Soft Beige for Background
        textPrimary: '#4E342E', // Dark Brown for Primary Text
        muted: '#8D6E63',       // Soft Gray-Brown
        danger: '#E53935',      // Red for Danger Actions
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FDD835, #FB8C00)', // Adjusted Primary gradient with a touch of orange
        'gradient-nav': 'linear-gradient(to right, #FDD835, #FB8C00)'
      },
      boxShadow: {
        'soft': '0 4px 8px rgba(0, 0, 0, 0.1)',   // Soft shadow for cards and buttons
        'hard': '0 4px 12px rgba(0, 0, 0, 0.15)', // Stronger shadow for elements like modals
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
