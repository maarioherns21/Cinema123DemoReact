import Movie from "../Movies/Movie/Movie";
import useFetch from "../useFetch/useFetch";






const MyMovies = () => {
  const { movies, error, isLoading } = useFetch();
  const data = movies.filter((movie) => movie.creator === "mario")

  return (
    <div>
      <div>{error ? error : null}</div>
      <div>{isLoading ? "Loading..." : " "}</div>
      <Movie movies={data} title="Mario's Movies" />
    </div>
  );
};


export default MyMovies