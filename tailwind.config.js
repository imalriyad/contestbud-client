import keepPreset from "keep-react/src/keep-preset.js";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [require("daisyui")],
  presets: [keepPreset],
  // other configurations...
};
