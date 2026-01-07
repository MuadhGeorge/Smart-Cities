import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Georgia Tech Primary
        'gt-navy': '#003057',
        'gt-gold': '#B3A369',
        // Accessible Gold Variants
        'gt-gold-medium': '#A4925A',  // Accessible for headlines
        'gt-gold-dark': '#857437',     // Accessible for small text
        'gt-buzz-gold': '#EAAA00',     // Alerts and accents
        // Extended Palette
        'gt-teal': '#008C95',          // Olympic Teal - sustainability metrics
        'gt-electric': '#64CCC9',      // Electric Blue - optional accent
        'gt-purple': '#5F249F',        // Impact Purple - equity comparisons
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['Roboto Slab', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;

