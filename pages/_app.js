import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Figtree } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const jakarta = Figtree({ subsets: ['latin'], 
variable: '--font-figtree' })

export default function App({ Component, pageProps }) {
  return(
    <main className={`${jakarta.variable} font-sans min-h-screen `}>
      <Layout>
        <main className=' mb-auto'>
          <Component {...pageProps} />
        </main>
      </Layout>
  </main>
  ) 
}
