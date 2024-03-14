/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "admin-navbar": "var(--admin-navbar-width)",
      },
      maxWidth: {
        "admin-navbar": "var(--admin-navbar-width)",
      },
      minWidth: {
        "admin-navbar": "var(--admin-navbar-width)",
      },
      margin: {
        "admin-navbar": "var(--admin-navbar-width)",
      },
      colors: {
        primary: {
          50: "#faf5ff",
          100: "#f1e3ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
      },
    },
  },
  plugins: [],
};
