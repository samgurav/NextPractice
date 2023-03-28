import MainLayout from '../src/components/Layout/main-layout'
import '../styles/global.css';
import '../styles/general.sass';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  
    <MainLayout>
  <Component {...pageProps} />
  </MainLayout>
  </>
  )
}
