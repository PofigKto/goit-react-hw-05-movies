import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as movieAPI from '../services/movies-api';

export default function MovieDetailsView() {
  // щоб отримати айдішнік одного фільму викоритовуємо ху - юз парамс
  const params = useParams();
  //   const params = { params: useParams() };
  console.log(params);
  // повертає нам обєкт динамічних параметрів
  //беремо диструктуризуємо з парамс фільмайді
  const { movieId } = useParams();

  // ми ще раз робимо хттп запис, тому що якщо користувач просто заходить по ссилці на сторінку однієї книги, то у нас не рендерилися попередні список книг, де був запит на бекенд, і ніякої відповіді від бекенду немає.
  // ще раз - це якщо користувач відразу ввів адресу однієї книги
  // обявляємо стейт для одного фільму і роблю юзефект фетч по муві айді і потім записую це в сетмуві
  const [movie, setMovie] = useState(null);
  console.log(movie);
  useEffect(() => {
    movieAPI.getMoviesById(movieId).then(response => setMovie(response));
  }, [movieId]);

  return (
    <>
      <PageHeading text={`${movieId}`} />
      {/* тут використовуємо динамічний параметр взятий з юзпарамс */}

      {/* якщо прийшда відповідь з бекенду(є фільми) ми можемо щось зарендерить, вибираємо з обєкта що нам потрібно (або це може бути окремий компонент типу карточка фільм кард) */}
      {movie && (
        <>
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p> Популярність: {movie.popularity}</p>
          <p> Опис: {movie.overview}</p>
        </>
      )}
    </>
  );
}
