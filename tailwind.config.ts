import type { Config } from 'tailwindcss'

export default <Config>{
  /* scan *every* source file that can contain Tailwind classes */
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/lib/**/*.{ts,tsx,js,jsx}',
  ],

  theme: {
    extend: {
      /* (optional) put any custom colours / fonts back here */
    },
  },

  plugins: [],            // add typography/forms later if you like
} 