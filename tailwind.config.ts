import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
 content: [
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./lib/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   colors: {
    // Identità 'Montagna Costruzioni Edili'
    brand: {
     // PRIMARIO: Nero profondo (Obsidian).
     // Usa 'DEFAULT' per sfondi scuri, 'light' per card hover scure.
     black: {
      DEFAULT: "#111111",
      light: "#1A1A1A",
      lighter: "#262626",
     },

     // NEUTRO: Grigio Cemento.
     // 'light' per sfondi pagina, 'DEFAULT' per bordi/divisori, 'dark' per testi secondari.
     concrete: {
      light: "#F3F4F6", // Sfondo chiaro pulito
      DEFAULT: "#9CA3AF", // Effetto cemento grezzo
      dark: "#4B5563", // Testo secondario su sfondo chiaro
     },

     // ACCENT: Giallo Dorato Attenuato (Structural Amber).
     // Usare per bottoni, link e highlight.
     gold: {
      DEFAULT: "#D4AF37", // Oro classico, solido
      hover: "#B5952F", // Versione più scura per stato hover
      subtle: "#FDF8E8", // Sfondo leggerissimo per box di evidenza
     },
    },
   },
   fontFamily: {
    // TITOLI: Strutturati, geometrici, solidi.
    // Assicurati di importare Montserrat da next/font/google
    heading: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],

    // CORPO: Leggibili, moderni, tecnici.
    // Assicurati di importare Inter da next/font/google
    body: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
   },
   // Estensioni opzionali per un look più 'edile'
   borderRadius: {
    'none': '0',
    'sm': '0.125rem',
    DEFAULT: '0.25rem', // Bordi leggermente squadrati per richiamare i blocchi
    'md': '0.375rem',
    'lg': '0.5rem',
    // Evitiamo bordi troppo "pillola" o "rounded-full" per mantenere serietà
   },
  },
 },
 plugins: [],
};

export default config;
