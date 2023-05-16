import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Seo from '@/components/Seo';
// import Layout from '@/components/Layout';
import localFont from 'next/font/local';
import NavBar from '@/components/NavBar';
import { usePathname } from 'next/navigation';

const myFont = localFont({
  src: '../assets/sanfranciscodisplay-regular-webfont.woff',
});

const App = ({ Component, pageProps }: AppProps) => {
  const pathname = usePathname();
  const isNavBar = pathname !== '/';

  return (
    <div className={`${myFont.className} container`}>
      <Seo title="넷플릭스" />
      <Component {...pageProps} />
      {isNavBar && <NavBar />}

      <style jsx>{`
        .container {
          width: 100%;
          height: ${isNavBar ? 'calc(100% - 64px)' : '100%'};
        }
      `}</style>
    </div>
  );
};

export default App;
