import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { SessionProvider } from "next-auth/react"

import PageChange from "@/components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/styles/tailwind.css";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  /*
  const root = createRoot(document.getElementById("page-transition"));
  root.render(<PageChange path={url} />);
  */
  /*ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );*/
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  componentDidMount() {
    //let comment = document.createComment();
    //document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps: { session, ...pageProps } } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Randy D. Binondo</title>
          
          {/*<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>*/}
          
        </Head>
        
          <Layout>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </Layout>
      </React.Fragment>
    );
  }
}
