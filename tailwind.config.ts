import { defineConfig } from "tailwindcss";
export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  experimental: {          // Turn OFF OKLCH, use rgb()
    colorFormat: "rgb"
  }
});
