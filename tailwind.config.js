// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-neon": "#00cc00", // Color verde neón personalizado
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
