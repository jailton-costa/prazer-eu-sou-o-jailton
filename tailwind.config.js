/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          100: 'var(--verde-100)',
          200: 'var(--verde-200)',
          300: 'var(--verde-300)',
        },
        azul: {
          100: 'var(--azul-100)',
          200: 'var(--azul-200)',
          300: 'var(--azul-300)',
        },
        amarelo: {
          100: 'var(--amarelo-100)',
          200: 'var(--amarelo-200)',
          300: 'var(--amarelo-300)',
        },
        preto: {
          100: 'var(--preto-100)',
          200: 'var(--preto-200)',
          300: 'var(--preto-300)',
        },
      },
    },
  },
  plugins: [],
}