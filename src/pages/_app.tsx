import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { ToastContainer } from "react-toastify"
import { Provider } from "react-redux"
import { store } from "src/app/store"

export default function App({ Component, pageProps }: AppProps) {
   return (
      <Provider store={store}>
         <Layout>
            <ToastContainer />
            <Component {...pageProps} />
         </Layout>
      </Provider>
   )
}
