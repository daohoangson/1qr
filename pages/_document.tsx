import { Html, Head, Main, NextScript } from 'next/document'

export default function Document (): JSX.Element {
  return (
    <Html lang='en'>
      <Head>
        {/* https://mui.com/material-ui/getting-started/installation/ */}
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
