// import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import FormBySearch from 'components/SearchForm/SearchForm';
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import * as movieAPI from '../services/movies-api';
// import styled from 'styled-components';

// const Link = styled.div`
//   display: inline-block;
//   text-decoration: none;
//   padding: 12px;
//   font-weight: 500;
//   color: #2a363b;
//   font-size: 18px;
// `;

export default function MoviesView() {
  // const [searchMovie, setSearchMovie] = useState('');
  // const [movies, setMovies] = useState([]);
  // console.log(movies);
  // useEffect(() => {
  //   if (!searchMovie) {
  //     return;
  //   }
  //   movieAPI.getMovieBySearch(searchMovie).then(response => {
  //     if (response.results.length === 0) {
  //       return toast.info(
  //         'Sorry, there are no movies matching your search query. Please try again.'
  //       );
  //     }
  //     setMovies(response.results);
  //     // console.log(movie);
  //   });
  // }, [searchMovie]);

  // const handleFormSubmit = searchMovie => {
  //   console.log(searchMovie);
  //   // resetPage();
  //   setSearchMovie(searchMovie);
  //   setMovies([]);
  // };
  return (
    <>
      {/* <FormBySearch inSubmit={handleFormSubmit} /> */}
      <Outlet />
      {/* <SearchMovieByName /> */}

      {/* {movies && (
        <ul>
          {movies.map(movie => (
            <NavLink
              to={`/movies/?query=${searchMovie}`}
              key={movie.id}
              className="Link"
            >
              <p>{movie.title}</p>
            </NavLink>
          ))}
        </ul>
      )}
      <Outlet /> */}
    </>
  );
}
