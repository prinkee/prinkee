/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',  // Add this line
    ],
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',  // Add this line
  ],
  daisyui: {
    themes: [
      {
        redblack: {
          'primary': '#b71c1c',
          'secondary': '#263238',
          'accent': '#ffeb3b',
          'neutral': '#1c1c1c',
          'base-100': '#000000',
          'info': '#2196f3',
          'success': '#4caf50',
          'warning': '#ff9800',
          'error': '#f44336',
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
