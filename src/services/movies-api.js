const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b799de2e1359641dffd47460cedfbdc0';
async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function getCredits(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function GetTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
}

export function getMoviesById(movieId) {
  // а тут наоборот єкспанд автор - когда мі забираем одну книжку, мі прикрепляем к ней ее автора, тоже по айдишнику
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
}
