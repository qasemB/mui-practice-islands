import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";

const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    fontFamily: "BYekan",
  },
});

const ThemeMUI = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
export default ThemeMUI;
