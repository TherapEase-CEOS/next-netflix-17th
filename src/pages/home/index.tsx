// 메인 페이지

import Header from '../../components/Header';
import MainImage from '../../components/MainImage';
import PlayBar from '../../components/PlayBar';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <MainImage />
      <PlayBar />
      <style jsx>{`
        .container {
          background-color: black;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;
