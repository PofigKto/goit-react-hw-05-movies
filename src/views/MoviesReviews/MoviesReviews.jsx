import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ButtonGoBack from '../../components/Button';
import * as moviesAPI from '../../services/movies-api';
import {
  AuthorName,
  Review,
  AuthorNameValue,
} from '../MoviesReviews/MoviesReviews.styled';

export default function MoviesReviews() {
  // const params = useParams();
  // console.log(params);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  console.log(navigate);
  useEffect(() => {
    moviesAPI
      .getReviews(movieId)
      .then(response => setReviews(response.results));
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      <ButtonGoBack onClick={() => navigate(-1)} />
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <AuthorName>
                Author: <AuthorNameValue> {review.author} </AuthorNameValue>
              </AuthorName>
              <Review>{review.content}</Review>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
