import daisyui from "npm:daisyui@4.12.10";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rotary: {
          blue: "#17458F",
          gold: "#f7a81b",
          "blue-dark": "#0f2d5e",
          "blue-light": "#2a5fad",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        rotary: {
          "primary": "#17458F",
          "primary-content": "#ffffff",
          "secondary": "#f7a81b",
          "secondary-content": "#1a1a1a",
          "accent": "#2a5fad",
          "accent-content": "#ffffff",
          "neutral": "#1a1a2e",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f4f7fc",
          "base-300": "#e8eef7",
          "base-content": "#1a1a2e",
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      "light",
    ],
    defaultTheme: "rotary",
  },
};
