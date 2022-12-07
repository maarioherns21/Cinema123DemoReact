import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../useFetch/useFetch'
import MovieItem from './MovieItem/MovieItem';


const MovieDetails = () => {
  const { movies, error, isLoading } = useFetch();
  const params = useParams();
  const movie = movies.find((movie) => movie._id == params.id);
  const navigate = useNavigate();

// if(!movie) return "loading..."

const handleDelete = async () => {
  await fetch(`http://localhost:4000/movies/${params.id}`, {
    method: "DELETE",
  }).then(() => {
    console.log(`${movie.name}  was deleted from the db`);
    navigate("/");
  });
};


  return (
    <div>
      <div>{error ? error : null}</div>
      <div>{isLoading ? "Loading..." : " "}</div>
      {movie && <MovieItem movie={movie} handleDelete={handleDelete} />}
    </div>
  );
};

export default MovieDetails