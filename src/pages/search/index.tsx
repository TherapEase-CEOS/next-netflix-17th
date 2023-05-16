import Image from 'next/image';
import SearchCard from '@/components/SearchCard';
import { IMovie } from '@/interfaces/interfaces';
import { useState } from 'react';

const Search = () => {
  // TO BE DELETED
  const dummyData = [
    {
      id: 502356,
      title: 'The Super Mario Bros. Movie',
      poster_path: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      backdrop_path: '/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg',
    },
    {
      id: 552688,
      title: 'The Mother',
      poster_path: '/vnRthEZz16Q9VWcP5homkHxyHoy.jpg',
      backdrop_path: '/n5NSF8wZeWQHHZtuWgbRAVpqXFR.jpg',
    },
    {
      id: 5023561,
      title: 'The Super Mario Bros. Movie',
      poster_path: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      backdrop_path: '/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg',
    },
    {
      id: 5526881,
      title: 'The Mother',
      poster_path: '/vnRthEZz16Q9VWcP5homkHxyHoy.jpg',
      backdrop_path: '/n5NSF8wZeWQHHZtuWgbRAVpqXFR.jpg',
    },
    {
      id: 5023562,
      title: 'The Super Mario Bros. Movie',
      poster_path: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      backdrop_path: '/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg',
    },
    {
      id: 5526882,
      title: 'The Mother',
      poster_path: '/vnRthEZz16Q9VWcP5homkHxyHoy.jpg',
      backdrop_path: '/n5NSF8wZeWQHHZtuWgbRAVpqXFR.jpg',
    },
    {
      id: 5023563,
      title: 'The Super Mario Bros. Movie',
      poster_path: '/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
      backdrop_path: '/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg',
    },
    {
      id: 5526883,
      title: 'The Mother',
      poster_path: '/vnRthEZz16Q9VWcP5homkHxyHoy.jpg',
      backdrop_path: '/n5NSF8wZeWQHHZtuWgbRAVpqXFR.jpg',
    },
  ];

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCloseClick = () => {
    setInputValue('');
  };

  return (
    <div className="container">
      <div className="sectionInput">
        <Image
          src={`/icons/search2.svg`}
          width={20}
          height={20}
          alt="search"
        ></Image>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Search for movies ..."
          spellCheck={false}
        ></input>
        <Image
          src={`/icons/close.svg`}
          width={15}
          height={15}
          alt="close"
          onClick={handleCloseClick}
          style={{ cursor: 'pointer' }}
        ></Image>
      </div>

      <div className="sectionResult">
        <span>Top Searches</span>
        <div className="cardsWrapper">
          {dummyData.map((movie: IMovie) => {
            return <SearchCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background-color: black;
          display: flex;
          flex-direction: column;
          overflow-y: scroll;
        }

        .sectionInput {
          width: 100%;
          height: 52px;
          margin-top: 44px;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--gray-bg-tag);
        }

        .sectionInput input {
          width: calc(100% - 40px - 20px - 15px);
          height: 52px;
          padding: 0;
          font-family: SF Pro Display;
          font-size: 16px;
          font-weight: 400;
          color: var(--gray-font-tag);
          background-color: transparent;
          border: none;

          &:focus {
            outline: none;
          }
        }

        .sectionResult {
          display: flex;
          flex-direction: column;
          background-color: black;
        }

        .sectionResult span {
          margin: 20px 10px;
          color: white;
          font-size: 26px;
          font-weight: 700;
        }

        .cardsWrapper {
          margin: -3px 0;
        }
      `}</style>
    </div>
  );
};

export default Search;
