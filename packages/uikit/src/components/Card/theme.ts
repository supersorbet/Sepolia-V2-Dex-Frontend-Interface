import { vars } from "@pancakeswap/ui/css/vars.css";
import { darkColors, lightColors } from "../../theme/colors";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.backgroundAlt,
  boxShadow: vars.shadows.level1,
  boxShadowActive: vars.shadows.active,
  boxShadowSuccess: vars.shadows.success,
  boxShadowWarning: vars.shadows.warning,
  cardHeaderBackground: {
    default: lightColors.gradientCardHeader,
    blue: lightColors.gradientBlue,
    bubblegum: lightColors.gradientBubblegum,
    violet: lightColors.gradientViolet,
  },
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

export const dark: CardTheme = {
  background: darkColors.backgroundAlt,
  boxShadow: '0px 0px 10px rgba(0, 238, 255, 0.15), 0px 0px 15px rgba(255, 0, 199, 0.1)',
  boxShadowActive: '0px 0px 0px 1px #FF00C7, 0px 0px 4px 8px rgba(0, 238, 255, 0.4)',
  boxShadowSuccess: vars.shadows.success,
  boxShadowWarning: vars.shadows.warning,
  cardHeaderBackground: {
    default: darkColors.gradientCardHeader,
    blue: darkColors.gradientBlue,
    bubblegum: darkColors.gradientBubblegum,
    violet: darkColors.gradientViolet,
  },
  dropShadow: "drop-shadow(0px 1px 4px rgba(0, 238, 255, 0.25))",
  borderImage: "linear-gradient(45deg, #00EEFF, #FF00C7, #9900FF, #00EEFF) 1",
};
