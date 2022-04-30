import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/Appbar';
import Container from './Container/Container';
import HomeView from '../views/HomeView';
import MovieDetailsView from '../views/MovieDetailsView';
import MoviesView from '../views/MoviesView';
import MoviesCredits from '../views/MovieCredits';
// import AuthorsView from './views/AuthorsView';
// import NotFoundView from './views/NotFoundView';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />}></Route>

        {/* <Route path=":movieId" element={<MovieDetailsView />}></Route> */}
        {/* <Route path="" element={<MovieDetailsView />}></Route> */}
        <Route path="movies" element={<MoviesView />}>
          <Route path=":movieId" element={<MovieDetailsView />}>
            <Route path="cast" element={<MoviesCredits />}></Route>
            {/* <Route path="reviews" element={<MoviesCredits />}></Route> */}
          </Route>
          {/* сюди рендерим компонент, який відповідає за показування одного лише фільму */}
        </Route>
      </Routes>
    </Container>
  );
};
