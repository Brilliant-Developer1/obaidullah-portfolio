// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#133955',
        secondary: '#dbdbdb',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#133955',
          'primary-focus': '#0f2c44', // Slightly darker shade for focus
          'primary-content': '#ffffff', // Text color on primary background
          secondary: '#dbdbdb',
          'secondary-focus': '#c0c0c0', // Slightly darker shade for focus
          'secondary-content': '#000000', // Text color on secondary background
        },
      },
    ],
  },
};
