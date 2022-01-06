import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import QUERY_FILMS from '@/gql-scripts/queries/queryAllFilms.graphql';

import styles from '@/styles/Home.module.css';

interface Film {
  id: number;
  title: string;
  releaseDate: string;
}

interface FilmData {
  allFilms?: {
    films: Film[];
    totalCount: number;
  };
}

interface FilmVars {
  first: number;
}

export default function Home() {
  const { push } = useRouter();

  const {
    data: filmData,
    loading: filmLoading,
    error: filmError,
  } = useQuery<FilmData, FilmVars>(QUERY_FILMS, {
    variables: {
      first: 5,
    },
  });

  // check for errors
  if (filmError) {
    return <p>:( an error happened</p>;
  }

  // if all good return data
  return (
    <div className={styles.container}>
      <Head>
        <title>Films GraphQL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Films</h1>
      {/* let the user know we are fetching the films */}
      {filmLoading && <p>loading...</p>}
      <div className='film-list-container'>
        {filmData?.allFilms?.films?.map((film) => (
          <div
            key={film.id}
            onClick={() => push(`/detail/${film.id}`)}
            className={styles.filmLink}
          >
            {film.title}
          </div>
        ))}
      </div>
    </div>
  );
}
