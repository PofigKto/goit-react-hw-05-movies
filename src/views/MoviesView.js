import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import { NavLink, Outlet } from 'react-router-dom';
import FormBySearch from 'components/SearchForm/SearchForm';
import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
import * as movieAPI from '../services/movies-api';
// import * as moviesAPI from '../services/movies-api';
// import PageHeading from '../components/PageHeading/PageHeading';
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
  const [searchMovie, setSearchMovie] = useState('');
  const [movie, setMovie] = useState([]);
  console.log(movie);
  useEffect(() => {
    if (!searchMovie) {
      return;
    }
    movieAPI.getMovieBySearch(searchMovie).then(response => {
      if (response.results.length === 0) {
        return toast.info(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }
      setMovie(response.results);
      // console.log(movie);
    });
  }, [searchMovie, movie]);

  const handleFormSubmit = searchMovie => {
    console.log(searchMovie);
    // resetPage();
    setSearchMovie(searchMovie);
    setMovie([]);
  };
  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon={false}
      /> */}

      {/* <PageHeading text="Search films" /> */}
      <FormBySearch inSubmit={handleFormSubmit} />

      {/* <Link>
        <NavLink to={`/movies/?query=${searchMovie}`} className="Link">
          searchMovie
        </NavLink>
      </Link> */}
      <Outlet />
    </>
  );
}
