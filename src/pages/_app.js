import '@/styles/globals.css'
import Head from 'next/head'

const App = ({ Component, pageProps }) => (
  <div className="bg-[#ECF2FF] grid w-full h-screen">
    <Head>
      <title>Result Summary</title>
    </Head>
    <Component {...pageProps} />
  </div>
)

export default App
