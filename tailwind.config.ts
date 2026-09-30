import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9F3", ink: "#2A1740", pink: "#E23D7A", purple: "#6A3FD1", orange: "#F2761E",
        blush: "#FFE3EE", lilac: "#EBE3FF", peach: "#FFE7D1",
      },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
