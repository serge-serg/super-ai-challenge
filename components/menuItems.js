const fontBold = { fontWeight: 700 };
const textColorMain = { color: "var(--color-dark-rose)" };
const textColorMainBold = { ...textColorMain, ...fontBold };
//const textBoldOpacity = { opacity: 0.6, ...fontBold };
const textBoldLightGreen = { color: "lightgreen", ...fontBold };
const textBoldDarkRed = { color: "#f00", opacity: 0.5, ...fontBold };
const menuItems = [
  { href: "/", text: "Toward the Point of No Return", key: "home" },
  {
    href: "/will-superintelligence-become-the-great-filter-for-humanity",
    text: [
      "Will ",
      <span key="superAI" style={textColorMainBold}>
        Superintelligence
      </span>,
      <>Become the <span style={textBoldDarkRed}>Great Filter</span> for Humanity?</>,
    ],
    key: "great-filter",
  },
  {
    href: "/why-we-will-not-refuse-creating-superintelligence",
    text: [
      "Why We Won't Refuse ",
      <>
        Creating <span style={textColorMainBold}>Superintelligence</span>
      </>,
    ],
    key: "wont-refuse",
  },
  {
    href: "/deep-dive-into-fundamental-ai-risks",
    text: [
      "Deep Dive into Fundamental ",
      <span key="ai-risks" style={textBoldDarkRed}>
        AI Risks
      </span>,
    ],
    key: "deep-dive",
  },
  /* {
    href: "/can-superintelligence-be-inherently-friendly",
    text: [
      "Can ",
      <>
        <span style={textColorMainBold}>Superintelligence</span>
      </>,
      <>
        Be <span style={textBoldLightGreen}>Friendly</span>?
      </>,
    ],
    key: "friendly",
  }, */
  {
    href: "/why-hal-9000-intended-to-kill-all-astronauts-aboard-discovery",
    text: [
      <>
        Why <span style={textColorMainBold}>Hal&nbsp;9000</span> Intended to 
        <span style={textBoldDarkRed}>Kill </span>All Astronauts Aboard Discovery
      </>,
    ],
    key: "hal-9000",
  },
  {
    href: "/why-could-not-the-matrix-exist-without-humans",
    text: (
      <>
        Why Could Not <span style={textColorMainBold}>The Matrix</span> Exist
        Without Humans?
      </>
    ),
    key: "the-matrix",
  },
  { href: "/we-need-your-opinion", 
    text: "We need your opinion!",
    key: "opinion",
  },
];
export default menuItems;
