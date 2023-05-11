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
  });

  return (
    <div>
      {imgPath && (
        <Image
          src={imgPath}
          width={400}
          height={415}
          alt="main"
          style={{ objectFit: 'cover' }}
        />
      )}
    </div>
  );
};

export default MainImage;
