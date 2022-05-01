import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/Appbar';
import Container from './Container/Container';
import HomeView from '../views/HomeView';
import MovieDetailsView from '../views/MovieDetailsView';
import MoviesView from '../views/MoviesView';
import MoviesCast from '../views/MovieCast';
import MoviesReviews from '../views/MoviesReviews';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import NotFoundView from './views/NotFoundView';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <ToastContainer
        position={'top-center'}
        autoClose={3000}
        // theme={'light'}
        theme={'colored'}
      />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>

        {/* <Route path=":movieId" element={<MovieDetailsView />}></Route> */}
        {/* <Route path="" element={<MovieDetailsView />}></Route> */}
        <Route path="movies" element={<MoviesView />}>
          <Route path=":movieId" element={<MovieDetailsView />}>
            <Route path="cast" element={<MoviesCast />}></Route>
            <Route path="reviews" element={<MoviesReviews />}></Route>
          </Route>
          {/* сюди рендерим компонент, який відповідає за показування одного лише фільму */}
        </Route>
      </Routes>
    </Container>
  );
};
