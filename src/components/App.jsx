import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/Appbar';
import Container from './Container/Container';
import HomeView from '../views/HomeView';
import SearchMovieByName from '../views/SearchMovieByName';
import MovieDetailsView from '../views/MovieDetailsView';
import MoviesView from '../views/MoviesView';
import MoviesCast from '../views/MovieCast/MovieCast';
import MoviesReviews from '../views/MoviesReviews';
import NotFoundView from '../views/NotFoundView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <ToastContainer
        position={'top-center'}
        autoClose={3000}
        theme={'colored'}
      />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="movies" element={<MoviesView />}>
          <Route index element={<SearchMovieByName />}></Route>
          {/* сюди рендерим компонент, який відповідає за показування одного лише фільму */}
          <Route path=":movieId" element={<MovieDetailsView />}>
            {/* вложені елементи, що рендяряться внизу на тій же сторінці що і карточка фільму,  */}
            <Route path="cast" element={<MoviesCast />}></Route>
            <Route path="reviews" element={<MoviesReviews />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundView />}></Route>
      </Routes>
    </Container>
  );
};
