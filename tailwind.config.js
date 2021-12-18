module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primary: "#ff4800",
        blue: {
          450: "#5f99f7",
        },
      },
    },
  },
  plugins: [],
};
