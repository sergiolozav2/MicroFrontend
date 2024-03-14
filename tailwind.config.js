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
    },
  },
  plugins: [],
};
