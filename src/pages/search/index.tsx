import SearchCard from '@/components/SearchCard';
import { IMovie } from '@/interfaces/interfaces';

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

  return (
    <div className="container">
      <div className="sectionInput">
        <input type="text" placeholder="Search for movies ..."></input>
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
        }

        .sectionInput {
          margin-top: 44px;
          display: flex;
        }

        .sectionInput input {
          width: 100%;
          height: 52px;
          padding: 0 45px;
          font-family: SF Pro Display;
          font-size: 16px;
          font-weight: 400;
          color: var(--gray-font-tag);
          background-color: var(--gray-bg-tag);
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
