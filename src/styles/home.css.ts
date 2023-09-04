import { style, fontFace } from "@vanilla-extract/css";

const urduNastaliq = fontFace({
  src: 'local("Noto Nastaliq Urdu")',
});

export const title = style({
  fontSize: "2rem",
  fontFamily: `${urduNastaliq}, serif`,
});
