import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { ToastContainer } from "react-toastify"

export default function App({ Component, pageProps }: AppProps) {
   return (
      <Layout>
         <ToastContainer />
         <Component {...pageProps} />
      </Layout>
   )
}
