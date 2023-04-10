import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Figtree } from "next/font/google";
import { Provider } from "react-redux";
import { wrapper } from "@/redux/store";
import toast, { Toaster } from 'react-hot-toast';

// If loading a variable font, you don't need to specify the font weight
const jakarta = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export default function App({
  Component,
  //  pageProps,
  ...rest
}) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <main className={`${jakarta.variable} font-sans min-h-screen `}>
        <Layout>
          <main className=" mb-auto mt-[70px] ">
            <Component {...pageProps} />
          </main>
          <Toaster/>
        </Layout>

      </main>
     
    </Provider>
  );
}
