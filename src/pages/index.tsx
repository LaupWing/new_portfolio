import Head from "next/head"
import { IoIosClose } from "react-icons/io"

export default function Home() {
   return (
      <div>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="p-5 rounded-lg max-w-xl border border-accent shadow shadow-accent text-accent mx-auto flex flex-col mt-10">
            <IoIosClose className="ml-auto" size={30}/>
            <p className="mb-0.5">Dear stranger,</p>
            <p>Welcome to my portfolio website. Feel free to look around. You can use the filter buttons below this message to... well to filter out projects.</p>
         </div>
      </div>
   )
}
