import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider enableSystem={true} attribute={"class"}>
  <NavBar />
  <Component {...pageProps} />
  </ThemeProvider>)
}

export default MyApp
