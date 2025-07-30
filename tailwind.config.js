/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  experimental: {
    colorFormat: "rgb"       // ⬅ Tailwind will output only rgb()/hex
  }
};
