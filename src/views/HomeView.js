import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import PageHeading from '../components/PageHeading/PageHeading';

export default function HomeView() {
  // для того що писати в адресну строку динамічні значення(раптом зміниться шлях фільму наприклад) то використовуємо юз раут метч(для вкладеної навігації )
  const navigate = useNavigate();
  console.log(navigate);
  // const match = useRouteMatch();
  // console.log(match);
  // там приходить обєкт, в якому є юрл, от його ми і беремо
  // const { url } = useRouteMatch();

  const [movies, setMovies] = useState(null);
  useEffect(() => {
    moviesAPI.GetTrending().then(response => setMovies(response.results));
  }, []);
  console.log(movies);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {/* тут можна зробити цілі карточки с картинками, цілі галереї, дивимось, що нам віддав бекенд */}
              {/* {movie.title} */}
              {/* але ми хочемо щоб назва фільму була ссілочкою, при клікі на яку ми б переходили на зовсім нову сторінку з всією інформацією про фільм.
              // тому використовуємо Лінк(він до речі має класснейм, тобто можна стилізувати) (не НавЛінк, тому що ми просто будемо переходити по ссилці на зовсім нову сторінку, тобто наш компонент хоумвью буде розмонтований а новий компонент(з інфо фільму) змонтований */}
              {/* пишимо куди ми переходимо через шаблонну строку  */}
              {/* <Link to={`/movies/${movie.id}`}>{movie.title}</Link> */}
              {/* тут замість букс ставимо юрл */}
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
