import type { Config } from 'tailwindcss'

const config: Config = {
  // tell Tailwind *where* to look for class names
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {},   // customise later if you want
  },

  darkMode: 'class',   // we toggle via the `.dark` class
}

export default config 