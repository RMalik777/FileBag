/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        "1": "#070606",
        "2": "#691F06",
        "3": "#8F250B",
        "4": "#BB4D00",
        "5": "#CA5210",
      },
    },
  },
  plugins: [],
};
