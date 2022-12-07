import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { Tooltip } from "react-tooltip"

export default function App({ Component, pageProps }: AppProps) {
   return (
      <Layout>
         <Tooltip/>
         <Component {...pageProps} />
      </Layout>
   )
}
