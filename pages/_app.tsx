import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import awsmobile from '../src/aws-exports'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

Amplify.configure({ ...awsmobile, ssr: true })

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
