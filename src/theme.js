// naming http://chir.ag/projects/name-that-color/
const colours = {
  bostonBlue: "#428bca",
  stTropaz: "#2a6496",
  maroonFlush: "#c7254e",
  softPeach: "#f9f2f4",
  mantis: "#6ECE5A"
};

const fontFamilies = {
  heading: "Poppins, Helvetica, Arial, sans-serif",
  body: "PT Serif, Helvetica, Arial, sans-serif",
  code: "Roboto Mono, monospace"
};

export default {
  textStyles: {
    canon: {
      tag: "h1",
      fontSize: [11, 12, 14],
      lineHeight: ["32px", "36px", "56px"],
      fontFamily: fontFamilies.heading
    },
    trafalgar: {
      tag: "h1",
      fontSize: [6, 9, 12],
      lineHeight: ["24px", "28px", "40px"],
      fontWeight: "400",
      fontFamily: fontFamilies.heading
    },
    paragon: {
      tag: "h2",
      fontSize: [6, 8, 11],
      lineHeight: ["20px", "26px", "32px"]
    },
    doublePica: {
      fontSize: [6, 6, 10],
      lineHeight: ["24px", "24px", "30px"]
    },
    greatPrimer: {
      tag: "h3",
      fontSize: [5, 5, 7],
      lineHeight: ["22px", "22px", "24px"]
    },
    bodyCopy: {
      tag: "p",
      fontSize: [3, 4, 5],
      fontFamily: fontFamilies.body,
      lineHeight: ["20px", "22px", "24px"]
    },
    code: {
      tag: "span",
      px: "4px",
      py: "2px",
      color: colours.maroonFlush,
      bg: colours.softPeach,
      borderRadius: 4,
      fontFamily: fontFamilies.code
    }
  },
  fontSizes: [12, 13, 14, 15, 16, 18, 20, 21, 22, 24, 26, 28, 32, 36, 52],
  breakpoints: ["319px", "599px"],
  colours: {
    ...colours
  }
};
