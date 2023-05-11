// 메인 페이지
import FlatList from '../../components/FlatList';
import { useState } from 'react';
import { WEB_SERVER_URL } from '@/utils/constants';

const Home = ({
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
}: any) => {
  const sections = [
    {
      title: 'Now Playing',
      data: nowPlayingMovies,
    },
    {
      title: 'Top Rated',
      data: topRatedMovies,
    },
    {
      title: 'Popular',
      data: popularMovies,
    },
    {
      title: 'Upcoming',
      data: upcomingMovies,
    },
  ];
  return (
    <div className="container">
      <style jsx>{`
        .container {
          background-color: black;
          width: 400px;
          overflow: hidden;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps() {
  const { results: nowPlayingMovies } = await (
    await fetch(`${WEB_SERVER_URL}/api/movies/now_playing`)
  ).json();

  const { results: popularMovies } = await (
    await fetch(`${WEB_SERVER_URL}/api/movies/popular`)
  ).json();

  const { results: topRatedMovies } = await (
    await fetch(`${WEB_SERVER_URL}/api/movies/top_rated`)
  ).json();

  const { results: upcomingMovies } = await (
    await fetch(`${WEB_SERVER_URL}/api/movies/upcoming`)
  ).json();

  return {
    props: { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies },
  };
}

export default Home;
