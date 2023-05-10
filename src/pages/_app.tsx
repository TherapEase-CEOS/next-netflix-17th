import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Seo from '@/components/Seo';
import Layout from '@/components/Layout';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../assets/sanfranciscodisplay-regular-webfont.woff',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout className={myFont.className}>
        <Seo title="넷플릭스" />
        <Component {...pageProps} />
      </Layout>

      <style jsx>{``}</style>
    </>
  );
};

export default App;
