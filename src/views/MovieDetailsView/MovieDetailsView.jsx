import { useState, useEffect } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  // useNavigate,
  useLocation,
} from 'react-router-dom';
import PageHeading from '../../components/PageHeading/PageHeading';
import ButtonGoBack from '../../components/Button';
import * as movieAPI from '../../services/movies-api';
import styled from 'styled-components';
import {
  CardMovie,
  MovieInfo,
} from '../MovieDetailsView/MovieDetailsView.styled';
// import { ImArrowLeft } from 'react-icons/im';

const Link = styled.div`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
`;

export default function MovieDetailsView() {
  // щоб отримати айдішнік одного фільму викоритовуємо хук - юз парамс
  // const params = useParams();
  // console.log(params);
  // повертає нам обєкт динамічних параметрів
  //беремо диструктуризуємо з парамс фільмайді
  const { movieId } = useParams();
  // ми ще раз робимо хттп запит, тому що якщо користувач просто заходить по ссилці на сторінку одного фільму, то у нас не рендерилися попередні список фільмфі, де був запит на бекенд, і ніякої відповіді від бекенду немає.
  // ще раз - це якщо користувач відразу ввів адресу одного фільму
  // обявляємо стейт для одного фільму і роблю юзефект фетч по муві айді і потім записую це в сетмуві
  const [movie, setMovie] = useState(null);
  // console.log(movie);
  // const navigate = useNavigate();
  // console.log(navigate);
  const location = useLocation;
  console.log(location);

  useEffect(() => {
    movieAPI.getMoviesById(movieId).then(response => setMovie(response));
  }, [movieId]);
  // функція що перевіряє чи є постер до фільму
  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
      // 'NO POSTER';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };
  // функція для переводу оцінки користувача в %
  const userScore = vote_average => {
    return vote_average * 10 + '%';
  };
  // тут перебираємо масив із жанрами через кому і пробел
  const allGenres = genres => {
    if (genres === null) {
      return;
    }
    return genres.map(genre => genre.name).join(', ');
  };

  return (
    <>
      <ButtonGoBack />
      {/* тут використовуємо динамічний параметр взятий з юзпарамс */}
      {/* якщо прийшда відповідь з бекенду(є фільми) ми можемо щось зарендерить, вибираємо з обєкта що нам потрібно (або це може бути окремий компонент типу карточка фільм кард) */}
      {movie && (
        <>
          <PageHeading text={`${movie.title}`} />
          <hr />
          <CardMovie>
            <img src={`${viewPoster(movie.poster_path)}`} alt={movie.title} />
            <MovieInfo>
              <h2> {movie.title} </h2>
              <h3> Overview: </h3>
              <p> {movie.overview} </p>
              <p> User score: {`${userScore(movie.vote_average)}`} </p>
              <h3> Genres: </h3>
              <p>
                {`${allGenres(movie.genres)}`}
                {/* інший варіант через редьюс - перший аргумент функціі колбек, що приймає акк і текуще значення, 
                      і другий аргумент редьюса - пуста строчка, куди буде записуватись значення і між ними пробел */}
                {/* {movie.genres.reduce(
              (acc, currrent) => acc + ' ' + currrent.name,
              ''
            )} */}
                <hr />
              </p>
            </MovieInfo>
          </CardMovie>
          <h3> Additional information </h3>
          <Link>
            <NavLink to={`/movies/${movie.id}/cast`} className="Link">
              <PageHeading text="Cast" />
              {/* Cast */}
            </NavLink>
          </Link>

          <Link>
            <NavLink to={`/movies/${movie.id}/reviews`} className="Link">
              <PageHeading text="Reviews" />
              {/* Reviews */}
            </NavLink>
          </Link>
          {/* тут будуть рендериться відповідні інфо без перезагрузки сторінки */}
          <Outlet />
        </>
      )}
    </>
  );
}
