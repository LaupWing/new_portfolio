import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { ToastContainer } from "react-toastify"
import {useEffect} from "react"
export default function App({ Component, pageProps }: AppProps) {

   useEffect(()=>{
      document.documentElement.classList.add("dark")
   },[])
   return (
      <Layout>
         <ToastContainer />
         <Component {...pageProps} />
      </Layout>
   )
}
