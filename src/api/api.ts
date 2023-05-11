export const fetchTrendingMovies = async () => {
  const res = await fetch(`http://localhost:3000/api/movies/trending`);
  const data = await res.json();

  return data;
};
