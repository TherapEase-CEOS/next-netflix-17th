export const fetchTrendingMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`);
  const data = await res.json();

  return data;
};
