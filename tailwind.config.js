/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          base: '#f9fafb',
          text: '#1f2937',
          accent: '#06b6d4',
          accentDark: '#22d3ee',
          muted: '#6b7280',
          hoverBg: '#e0f7fa',
        },
      },
    },
  },
  plugins: [],
}