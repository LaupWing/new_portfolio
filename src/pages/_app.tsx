import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import "react-tooltip/dist/react-tooltip.css"

export default function App({ Component, pageProps }: AppProps) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   )
}
