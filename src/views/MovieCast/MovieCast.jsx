import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ButtonGoBack from '../../components/Button';
import * as moviesAPI from '../../services/movies-api';
import {
  CastGallery,
  Character,
  CharacterValue,
  CastName,
} from '../MovieCast/MovieCast.styled';

export default function MoviesCast() {
  const params = useParams();
  console.log(params);
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const navigate = useNavigate();
  console.log(navigate);
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
      <ButtonGoBack onClick={() => navigate(-1)} />
      {cast && (
        <CastGallery>
          {cast.map(castOne => (
            <li key={castOne.id}>
              <img
                src={`${viewPoster(castOne.profile_path)}`}
                alt={castOne.name}
                width="240"
              />
              <CastName>{castOne.name}</CastName>
              <Character>
                {' '}
                Character:<CharacterValue>
                  {' '}
                  {castOne.character}{' '}
                </CharacterValue>{' '}
              </Character>
            </li>
          ))}
        </CastGallery>
      )}
    </>
  );
}
