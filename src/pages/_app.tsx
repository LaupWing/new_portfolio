import type { AppProps } from "next/app"
import "../styles/globals.css"
import "react-image-gallery/styles/css/image-gallery.css"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { Provider } from "react-redux"
import { store } from "src/app/store"
import { Layout } from "src/components/Globals"

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
