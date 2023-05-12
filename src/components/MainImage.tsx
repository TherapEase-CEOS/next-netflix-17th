import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchTrendingMovies } from '@/api/api';

// TODO - 리렌더링 여러번 발생 문제

const MainImage = () => {
  const rand = Math.floor(Math.random() * 20);
  const [imgPath, setImgPath] = useState<string>('');

  useEffect(() => {
    const getTrendingMovie = async () => {
      await fetchTrendingMovies().then((data) => {
        setImgPath(
          `https://image.tmdb.org/t/p/original${data.results[rand].poster_path}`
        );
      });
    };
    getTrendingMovie();
  }, []);

  return (
    <div className="wrapper">
      {imgPath && (
        <Image
          src={imgPath}
          width={400}
          height={415}
          alt="main"
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className="linearGradient"></div>

      <style jsx>{`
        .wrapper {
          width: 100%;
          height: 415px;
        }

        .linearGradient {
          position: absolute;
          top: 0;
          width: 400px;
          height: 415px;
          z-index: 90;
          background: linear-gradient(to top, black, transparent 10%);
        }
      `}</style>
    </div>
  );
};

export default MainImage;
