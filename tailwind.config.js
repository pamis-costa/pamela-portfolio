/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Aqui animação do gatinho
      keyframes: {
        walkAround: {
          /* 🐾 1. (Indo para a direita, patinhas para baixo) */
          '0%': { top: 'calc(100dvh - 5rem)', left: '0vw', transform: 'rotate(0deg)' },
          '22%': { top: 'calc(100dvh - 5rem)', left: 'calc(100vw - 5rem)', transform: 'rotate(0deg)' },

          /* (Focinho pra cima, patas na parede direita) */
          '25%': { top: 'calc(100dvh - 5rem)', left: 'calc(100vw - 5rem)', transform: 'rotate(-90deg)' },

          /* 🐾 2. (Subindo) */
          '47%': { top: '0vh', left: 'calc(100vw - 5rem)', transform: 'rotate(-90deg)' },

          /* (Focinho pra esquerda, patas no teto) */
          '50%': { top: '0vh', left: 'calc(100vw - 5rem)', transform: 'rotate(-180deg)' },

          /* 🐾 3. Teto (Indo para a esquerda) */
          '72%': { top: '0vh', left: '0vw', transform: 'rotate(-180deg)' },

          /*(Focinho pra baixo, patas na parede esquerda) */
          '75%': { top: '0vh', left: '0vw', transform: 'rotate(-270deg)' },

          /* 🐾 4. (Descendo) */
          '97%': { top: 'calc(100dvh - 5rem)', left: '0vw', transform: 'rotate(-270deg)' },

          /* Vira a esquina inferior esquerda*/
          '100%': { top: 'calc(100dvh - 5rem)', left: '0vw', transform: 'rotate(-360deg)' },
        }
      },
      animation: {
        'walk-cat': 'walkAround 30s linear infinite', 
      }
      // Aqui termina a configuração do gatinho animado
    },
  },
  plugins: [],
  darkMode: "class",
};
