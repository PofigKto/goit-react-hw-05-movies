import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';

export default function MoviesCast() {
  const params = useParams();
  console.log(params);
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesAPI.getCast(movieId).then(response => setCast(response.cast));
  }, [movieId]);
  console.log(cast);
  const viewPoster = profile_path => {
    if (profile_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
      // 'NO POSTER';
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
              <h3>{castOne.name}</h3>
              <p> Character: {castOne.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
