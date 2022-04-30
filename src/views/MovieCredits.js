import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';

export default function MoviesCredits() {
  const params = useParams();
  console.log(params);
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesAPI.getCredits(movieId).then(response => setCast(response.cast));
  }, [movieId]);
  console.log(cast);
  const viewPoster = profile_path => {
    if (profile_path === null) {
      return 'NO POSTER';
    }
    return `https://image.tmdb.org/t/p/w300${profile_path}`;
  };
  return (
    <>
      {cast && (
        <ul>
          {cast.map(castOne => (
            <li key={castOne.id}>
              <img
                src={`${viewPoster(castOne.profile_path)}`}
                alt={castOne.name}
              />
              <p>{castOne.name}</p>
              <p> Character: {castOne.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
