/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor : {
      "main" : "#010211",
      "Blue" : "#1e98d5",
      "White" : "#e9ebf3"
    },
    textColor : {
      "Blue" : "#1e98d5",
      "White" : "#e9ebf3"
    }
  },
  plugins: [],
}

