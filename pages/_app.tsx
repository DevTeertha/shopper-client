import React from "react";
import "../styles/globals.scss";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../src/redux/store";

/**
 * Adds two numbers together.
 * @param {component} Component The first number.
 * @param {props} props The second number.
 * @return {JSX} The sum of the two numbers.
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
