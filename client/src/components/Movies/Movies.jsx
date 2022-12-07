import { useState } from "react"
import Pagination from "../Pagination/Pagiination"
import SearchBar from "../SearchBar/SearchBar"
import useFetch from "../useFetch/useFetch"
import Movie from "./Movie/Movie"


const Movies = () => {
const { movies, error, isLoading } = useFetch();
const [currentPage, setCurrentPage] = useState(1);
const [moviesPerPage, setMoviesPerPage] = useState(3);

const lastMovieIndex = currentPage * moviesPerPage;
const firsMovieIndex = lastMovieIndex - moviesPerPage;
const currentMovies = movies.slice(firsMovieIndex, lastMovieIndex);





    return (
      <div>
        <div>{error ? error : null}</div>
        <div>{isLoading ? "Loading..." : ' '}</div>
        <SearchBar movies={movies} />
        <Movie movies={currentMovies} title="All Movies" />
        <Pagination totalMovies={movies.length} moviesPerPage={moviesPerPage} setCurrentPage={setCurrentPage} setMoviesPerPage={setMoviesPerPage} />
      </div>
    );
}

export default Movies