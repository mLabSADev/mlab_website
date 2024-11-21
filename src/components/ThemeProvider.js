import { ThemeProvider, createTheme } from "@mui/material";
import { ConfigProvider } from "antd";
import React from "react";
export const MUITheme = createTheme({
  palette: {
    primary: { main: "#94c73d" },
    secondary: { main: "#073f4e" },
  },
});
export const ANTDTheme = {
  token: {
    colorPrimary: MUITheme.palette.primary.main,
    colorInfo: "#3eca30",
  },
  components: {
    Menu: {
      colorSplit: "rgba(5, 5, 5, 0)",
    },
  },
};
const MUIProvider = (props) => {
  const { children } = props;
  return <ThemeProvider theme={MUITheme}>{children}</ThemeProvider>;
};

export default MUIProvider;
