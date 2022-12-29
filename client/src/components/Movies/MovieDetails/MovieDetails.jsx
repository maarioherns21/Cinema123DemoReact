import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../useFetch/useFetch'
import MovieItem from './MovieItem/MovieItem';
import '../Styles.css'
import { CircularProgress, Paper } from '@mui/material';


const MovieDetails = () => {
  const params = useParams();
  const { movies, isLoading, error } = useFetch();
  const movie = movies.find((movie) => movie._id == params.id);
  const navigate = useNavigate();


  const handleDelete = async () => {
    await fetch(`https://cinemademo123.herokuapp.com/movies/${params.id}`, {
      method: "DELETE",
    }).then(() => {
      console.log(` ${movie.name} was deleted from DB`);
      navigate("/");
    });
  };

  if (!movie) {
    return (
      <Paper elevation={6} style={{  display: "flex", justifyContent: "center",  alignItems: "center",
      padding: "20%" ,  height: "39vh", }}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <div className="">
      <div>{error ? error : null}</div>
      <div>{isLoading ? "Loading..." : ""}</div>
     <MovieItem movie={movie} handleDelete={handleDelete} />
    </div>
  );
};

export default MovieDetails