/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      textColor: {
        gray: {
          50: "#FBFBFB",
          100: "#F1F1F1",
          150: "#F4F4F4",
          200: "#F9F9F9",
          300: "#E6E6E6",
          350: "#E9ECEF",
          400: "#999999",
          500: "#7e7e7e",
          600: "#3A3A3A",
          700: "#222222",
          800: "#707070",
        },
        skin: {
          primary: withOpacity("--color-primary"),
          red: withOpacity("--color-red"),
          purple: withOpacity("--color-purple"),
          cerulean: withOpacity("--color-cerulean"),
          salmon: withOpacity("--color-salmon"),
          tree: withOpacity("--color-tree"),
          yellow: withOpacity("--color-yellow"),
          "yellow-two": withOpacity("--color-yellow-two"),
          "yellow-three": withOpacity("--color-yellow-three"),
          carnation: withOpacity("--color-carnation"),
          base: withOpacity("--color-text-base"),
          inverted: withOpacity("--color-text-inverted"),
          muted: withOpacity("--color-text-muted"),
          secondary: withOpacity("--color-text-secondary"),
          countdown: withOpacity("--color-text-countdown"),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          red: withOpacity("--color-red"),
          tints: withOpacity("--color-tints"),
          purple: withOpacity("--color-purple"),
          cerulean: withOpacity("--color-cerulean"),
          salmon: withOpacity("--color-salmon"),
          tree: withOpacity("--color-tree"),
          yellow: withOpacity("--color-yellow"),
          footer: withOpacity("--color-footer"),
          "yellow-two": withOpacity("--color-yellow-two"),
          "yellow-three": withOpacity("--color-yellow-three"),
          base: withOpacity("--color-text-base"),
          carnation: withOpacity("--color-carnation"),
          fill: withOpacity("--color-fill"),
          thumbnail: withOpacity("--color-fill-thumbnail"),
          inverted: withOpacity("--color-text-inverted"),
          one: withOpacity("--color-fill-one"),
          two: withOpacity("--color-fill-two"),
          three: withOpacity("--color-fill-three"),
          six: withOpacity("--color-fill-six"),
          eight: withOpacity("--color-fill-eight"),
          secondary: withOpacity("--color-fill-secondary"),
          highlighted: withOpacity("--color-highlighted"),
          "dropdown-hover": withOpacity("--color-fill-dropdown-hover"),
          "button-secondary": withOpacity("--color-button-secondary"),
          "button-disable": withOpacity("--color-button-disable"),
          "button-hover": withOpacity("--color-button-hover"),
        },
      },
      borderColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          red: withOpacity("--color-red"),
          yellow: withOpacity("--color-yellow"),
          base: withOpacity("--color-border-base"),
          one: withOpacity("--color-border-one"),
          two: withOpacity("--color-border-two"),
          three: withOpacity("--color-border-three"),
          four: withOpacity("--color-border-four"),
          form: withOpacity("--color-borfont-der-form"),
          "yellow-three": withOpacity("--color-yellow-three"),
        },
      },
      ringColor: {
        skin: {
          red: withOpacity("--color-red"),
          base: withOpacity("--color-border-base"),
          form: withOpacity("--color-border-form"),
          primary: withOpacity("--color-primary"),
        },
      },
      fontSize: {
        "10px": ".625rem",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
      },
      fontWeight: {
        semibold: "500",
      },
      screens: {
        xs: "300px",
        "3xl": "1780px",
        "4xl": "1921px",
      },
      spacing: {
        "430px": "430px",
        "450px": "450px",
        "500px": "500px",
        "64vh": "64vh",
      },
      minHeight: {
        "50px": "50px",
      },
      scale: {
        80: "0.8",
        85: "0.85",
        300: "3",
        400: "4",
      },
      width: {
        "1/9": "11.1111111%",
        "100+30": "calc(100% + 30px)",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        shine: "shine 0.8s ease-in",
        ping: "ping 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
    boxShadow: {
      card: "0px 0px 6px rgba(79, 95, 120, 0.1)",
      cardHover: "0px 0px 8px rgba(79, 95, 120, 0.18)",
      category: "0px 1px 6px rgba(79, 95, 120, 0.12)",
      navigation: "0 3px 6px rgba(115, 125, 144, 0.25)",
      counter: "0px 4px 10px rgba(79, 95, 120, 0.15)",
      featured: "0px 4px 8px rgba(70, 84, 111, 0.06)",
      cart: "0 3px 6px rgba(0,0,0,0.12)",
      switch: "0 2px 5px rgba(21,35,49,0.4)",
      dropDown: "0px 10px 40px rgba(41, 50, 68, 0.15)",
      carouselButton: "0px 2px 15px rgba(115, 125, 144, 0.25)",
      listProduct: "0 2px 4px rgba(0,0,0,.08)",
      navigationReverse: "0 -3px 6px rgba(0, 0, 0, 0.16)",
      header: "0 2px 3px rgba(0, 0, 0, 0.08)",
      subMenu: "1px 2px 3px rgba(0, 0, 0, 0.08)",
      bottomNavigation: "0 -2px 3px rgba(0, 0, 0, 0.06)",
      cookies: "0 -2px 3px rgba(0, 0, 0, 0.04)",
      contact: "0 1px 10px rgba(75, 90, 130, 0.1)",
      vendorCard: "0px 2px 3px rgba(0, 0, 0, 0.06)",
      vendorCardHover: "0px 1px 15px rgba(0, 0, 0, 0.06)",
      vendorSidebar:
        "0px 1px 2px rgba(0, 0, 0, 0.03), 0px 1px 3px rgba(0, 0, 0, 0.05)",
    },
    fontFamily: {
      body: ["'Rubik',Arial,Helvetica,sans-serif"],
      manrope: ["'Manrope',Arial,Helvetica,sans-serif"],
    },
  },
  plugins: [],
};
