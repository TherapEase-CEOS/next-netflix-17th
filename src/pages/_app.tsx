import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Seo from '@/components/Seo';
import Layout from '@/components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Seo title="넷플릭스" />
        <Component {...pageProps} />
      </Layout>

      <style jsx>{``}</style>
    </>
  );
};

export default App;
