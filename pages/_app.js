import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Figtree } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const figtree = Figtree({ subsets: ['latin'], 
variable: '--font-figtree' })

export default function App({ Component, pageProps }) {
  return(
    <main className={`${figtree.variable} font-sans`}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
  </main>
  ) 
}
