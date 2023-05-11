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
      <div className="section">
        <h3>{'Previews'}</h3>
        <FlatList movieLists={upcomingMovies} round />
      </div>

      {sections.map(({ title, data }) => {
        return (
          <div className="section">
            <h3>{title}</h3>
            <FlatList movieLists={data} />
          </div>
        );
      })}
      <div className="gap" />
      <style jsx>{`
        .container {
          background-color: black;
          width: 400px;
          overflow: hidden;
          height: 100%;
          overflow-y: scroll;
        }
        h3 {
          font-size: 21px;
          margin: 1.5rem 0rem 0.5rem 1rem;
          font-family: 'SF Pro Display';
          font-weight: 900;
          color: white;
        }
        .section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .gap {
          height: 64px;
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
