import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import React from "react";
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
