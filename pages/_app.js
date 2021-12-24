import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return ( 
    <MoralisProvider appId={String(process.env.NEXT_PUBLIC_APP_ID)} serverUrl={String(process.env.NEXT_PUBLIC_SERVER_URL)}>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
