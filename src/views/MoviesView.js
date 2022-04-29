// import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// import * as moviesAPI from '../services/movies-api';
import PageHeading from '../components/PageHeading/PageHeading';

export default function MoviesView() {
  return (
    <>
      <PageHeading text="Search films" />
      <Outlet />
    </>
  );
}
