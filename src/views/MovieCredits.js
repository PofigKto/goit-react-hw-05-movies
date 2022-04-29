import { useState, useEffect } from 'react';
// import { Link, Outlet, useParams } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
// import PageHeading from '../components/PageHeading/PageHeading';

export default function MoviesCredits() {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesAPI.getCredits().then(response => setCast(response.cast));
  }, []);
  console.log(cast);
  return (
    <>
      <p> Cast: </p>
      {/* <p> User score: {`${userScore(movie.vote_average)}`}</p> */}

      {/* <Outlet /> */}
    </>
  );
}
