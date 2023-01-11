import type { AppProps } from 'next/app'
import { globalStyles } from './global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
