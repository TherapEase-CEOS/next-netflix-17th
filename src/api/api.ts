export const fetchTrendingMovies = async () => {
  const res = await fetch(`http://127.0.0.1:3000/api/movies/trending`);
  const data = await res.json();

  return data;
};
