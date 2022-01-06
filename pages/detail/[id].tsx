import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import QUERY_FILMS from '@/gql-scripts/queries/queryFilm.graphql';

import styles from '@/styles/Detail.module.css';

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
        <title>Film Detail GraphQL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className={styles.textCenter}>Film Detail {filmId}</h1>
      {/* let the user know we are fetching the films */}
      {filmLoading && <p className={styles.textCenter}>loading...</p>}
      {filmData && (
        <div className={styles.filmDetailContainer}>
          <p>
            <b>id:</b> <code data-testid='film-id'>{filmData?.film?.id}</code>
          </p>
          <p>
            <b>title:</b>{' '}
            <code data-testid='film-title'>{filmData?.film?.title}</code>
          </p>
          <p>
            <b>openingCrawl:</b>{' '}
            <code data-testid='film-openingcrawl'>
              {filmData?.film?.openingCrawl}
            </code>
          </p>
          <p>
            <b>director:</b>{' '}
            <code data-testid='film-director'>{filmData?.film?.director}</code>
          </p>
          <p>
            <b>releaseDate:</b>{' '}
            <code data-testid='film-releasedate'>
              {filmData?.film?.releaseDate}
            </code>
          </p>
          <p>
            <b>edited:</b>{' '}
            <code data-testid='film-edited'>{filmData?.film?.edited}</code>
          </p>
          <p>
            <b>created:</b>{' '}
            <code data-testid='film-created'>{filmData?.film?.created}</code>
          </p>
        </div>
      )}
    </div>
  );
}
