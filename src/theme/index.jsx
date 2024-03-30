import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("rgb(153, 113, 212, 0.1)", "rgb(153, 113, 212, 0.2)")(props),
      color: "#1C1C24",
    },
  }),
};

const colors = {
  brand: {
    100: "rgb(153, 113, 212, 0.1)",
    200: "#074CDE",
    300: "#FF8901",
  },
};

const fonts = {
  heading: `'Chewy', san-serif`,
  body: `'Chewy', sans-serif`,
};

const components = {
  Button: {},
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
