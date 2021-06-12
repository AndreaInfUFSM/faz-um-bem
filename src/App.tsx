import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import "./globalStyles.css";
import Router from "./routes/index";
import theme from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
);
