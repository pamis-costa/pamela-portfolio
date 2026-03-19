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
          '0%': { top: '90vh', left: '0vw', transform: 'rotate(0deg)' },
          '22%': { top: '90vh', left: '94vw', transform: 'rotate(0deg)' },

          /* (Focinho pra cima, patas na parede direita) */
          '25%': { top: '90vh', left: '94vw', transform: 'rotate(-90deg)' },

          /* 🐾 2. Parede Direita (Subindo) */
          '47%': { top: '0vh', left: '94vw', transform: 'rotate(-90deg)' },

          /* (Focinho pra esquerda, patas no teto) */
          '50%': { top: '0vh', left: '94vw', transform: 'rotate(-180deg)' },

          /* 🐾 3. (Indo para a esquerda) */
          '72%': { top: '0vh', left: '0vw', transform: 'rotate(-180deg)' },

          /*(Focinho pra baixo, patas na parede esquerda) */
          '75%': { top: '0vh', left: '0vw', transform: 'rotate(-270deg)' },

          /* 🐾 4. Parede Esquerda (Descendo) */
          '97%': { top: '91vh', left: '0vw', transform: 'rotate(-270deg)' },

          /* Vira a esquina inferior esquerda*/
          '100%': { top: '91vh', left: '0vw', transform: 'rotate(-360deg)' },
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
