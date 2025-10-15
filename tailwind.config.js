/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    corePlugins: {
      preflight: true,
    },
    future: {
      // Prevent Tailwind from generating LAB color syntax
      hoverOnlyWhenSupported: false,
    },
  };
  