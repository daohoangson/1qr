import '@aws-amplify/ui-react/styles.css'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Amplify } from 'aws-amplify'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import awsmobile from '../src/aws-exports'
import { theme } from '../src/modules/visual/theme'

Amplify.configure({ ...awsmobile, ssr: true })

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
