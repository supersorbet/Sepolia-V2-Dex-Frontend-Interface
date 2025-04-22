import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
    borderRadius: "12px",
    transition: "background-color 0.2s, opacity 0.2s",
    "&:hover:not(:disabled)": {
      opacity: 0.65,
    },
    "&:active:not(:disabled)": {
      opacity: 0.85,
    },
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    borderRadius: "12px",
    boxShadow: "none",
    color: "primary",
    transition: "opacity 0.2s",
    "&:hover:not(:disabled)": {
      opacity: 0.65,
    },
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
    borderRadius: "12px",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
    borderRadius: "12px",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
    borderRadius: "12px",
    "&:hover:not(:disabled)": {
      opacity: 0.65,
    },
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
    borderRadius: "12px",
    "&:hover:not(:disabled)": {
      opacity: 0.65,
    },
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
    "&:hover:not(:disabled)": {
      opacity: 0.65,
    },
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
    borderRadius: "12px",
  },
};
