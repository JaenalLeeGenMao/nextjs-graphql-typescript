import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import QUERY_FILMS from '@/gql-scripts/queries/queryFilm.graphql';

import styles from '@/styles/Home.module.css';

interface Film {
  id: number;
  title: string;
  openingCrawl: string;
  director: string;
  releaseDate: string;
  edited: string;
  created: string;
}

interface FilmData {
  film: Film;
}

interface FilmVars {
  id: string | string[];
}

export default function Home() {
  const {
    query: { id: filmId },
  } = useRouter();
  const {
    data: filmData,
    loading: filmLoading,
    error: filmError,
  } = useQuery<FilmData, FilmVars>(QUERY_FILMS, {
    variables: {
      id: filmId,
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
        <title>Countries GraphQL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Film Detail {filmId}</h1>
      {/* let the user know we are fetching the films */}
      {filmLoading && <p>loading...</p>}
      {filmData && (
        <div>
          <p>
            <b>id:</b> <code>{filmData?.film?.id}</code>
          </p>
          <p>
            <b>title:</b> <code>{filmData?.film?.title}</code>
          </p>
          <p>
            <b>openingCrawl:</b> <code>{filmData?.film?.openingCrawl}</code>
          </p>
          <p>
            <b>director:</b> <code>{filmData?.film?.director}</code>
          </p>
          <p>
            <b>releaseDate:</b> <code>{filmData?.film?.releaseDate}</code>
          </p>
          <p>
            <b>edited:</b> <code>{filmData?.film?.edited}</code>
          </p>
          <p>
            <b>created:</b> <code>{filmData?.film?.created}</code>
          </p>
        </div>
      )}
    </div>
  );
}
