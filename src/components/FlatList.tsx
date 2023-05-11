import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMovie } from '@/interfaces/interfaces';
import { IMAGE_BASE_URL } from '@/utils/constants';
const FlatList = ({ movieLists }: { movieLists: IMovie[] }) => {
  return (
    <div className="container">
      {movieLists.map((movie, idx) => (
        <FlatListItem item={movie} key={idx} />
      ))}
      <style jsx>{`
        .container {
          display: flex;
          gap: 0.5rem;
          width: 40rem;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

const FlatListItem = ({ item }: { item: IMovie }) => {
  const { title, id, poster_path } = item;
  return (
    <Link href={`/detail/${id}`} key={12}>
      <div className="wrapper">
        <Image
          src={`${IMAGE_BASE_URL}${poster_path}`}
          width={100}
          height={160}
          alt={title}
          style={{
            objectFit: 'cover',
          }}
        />

        <style jsx>{`
          .wrapper {
            width: 6.5rem;
            height: 10rem;
          }
        `}</style>
      </div>
    </Link>
  );
};
export default FlatList;
