import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/toucanprofpicround.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}