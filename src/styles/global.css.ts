import { globalStyle } from "@vanilla-extract/css";
import { colors } from "./theme";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
});

globalStyle("html", {
  display: "flex",
});

globalStyle("html, body", {
  background: colors.melon,
});
