import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

export default (props) => {
  const theme = createMuiTheme({
    spacing: 1,
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3f51b5",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
          {props.children}
      </ThemeProvider>
    </>
  );
};
