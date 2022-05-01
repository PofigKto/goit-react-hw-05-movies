import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';

export default function MoviesReviews() {
  const params = useParams();
  console.log(params);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI
      .getReviews(movieId)
      .then(response => setReviews(response.results));
  }, [movieId]);
  console.log(reviews);
  //   const viewPoster = profile_path => {
  //     if (profile_path === null) {
  //       return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
  //       // 'NO POSTER';
  //     }
  //     return `https://image.tmdb.org/t/p/w300${profile_path}`;
  //   };
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
      {/* {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
}
