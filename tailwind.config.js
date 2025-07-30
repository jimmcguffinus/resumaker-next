/** Tailwind v4 – force legacy rgb() colours for html2canvas */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  experimental: {
    colorFormat: 'rgb'       // << kill OKLCH at source
  },
  theme: { extend: {} },
  plugins: []
};
