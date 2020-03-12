const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        sosf: "rgba(30,112,195,1)",
        "sosf-light": "rgba(30,112,195,0.9)",
        "smoke-darkest": "rgba(0, 0, 0, 0.9)",
        "smoke-darker": "rgba(0, 0, 0, 0.75)",
        "smoke-dark": "rgba(0, 0, 0, 0.6)",
        smoke: "rgba(0, 0, 0, 0.5)",
        "smoke-light": "rgba(0, 0, 0, 0.4)",
        "smoke-lighter": "rgba(0, 0, 0, 0.25)",
        "smoke-lightest": "rgba(0, 0, 0, 0.1)"
      },
      inset: {
        "1/2": "50%"
      },
      fontFamily: {
        audio: "Audiowide",
        sans: ["Inter\ var", ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%"
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "90": "90%",
        "250": "250px"
      },
      minWidth: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",

        "250": "250px",
        "350": "350px",
        "500": "500px"
      },
      opacity: {
        "80": ".80",
        "85": ".85",
        "90": ".90"
      },
      maxHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "90": "90%"
      },
      minHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "250": "250px"
      },
      zIndex: {
        "-20": -20,
        "-10": -10
      },
      fontSize: {
        "100": "100%",
        "50": "50%"
      }
    }
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
    padding: ["responsive", "hover", "focus"],
    display: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"]
  },
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
    function ({
      addBase,
      config,

    }) {
      addBase({
        h1: {
          fontSize: config("theme.fontSize.6xl")
        },
        h2: {
          fontSize: config("theme.fontSize.5xl")

        },
        h3: {
          fontSize: config("theme.fontSize.4xl")
        },
        h4: {
          fontSize: config("theme.fontSize.3xl")
        },
        h5: {
          fontSize: config("theme.fontSize.2xl"),
          fontFamily: config("theme.fontFamily.audio")
        },
        p: {
          lineHeight: config("theme.lineHeight.loose")
        }
      });
    }
  ]
};