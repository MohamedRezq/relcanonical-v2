import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          id="kt_body"
          className="header-fixed header-mobile-fixed subheader-enabled page-loading"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
