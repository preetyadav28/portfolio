import type { Config } from "tailwindcss";

export default {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            primary: "#000000", // Black
            secondary: "#F5F5F5", // Cool White
            red: "#aa44aa",
         },
         fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
            prata: ["Prata", "serif"],
         },
      },
   },
   plugins: [],
} satisfies Config;
