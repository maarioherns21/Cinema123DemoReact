
import {Link} from "react-router-dom"

const Movie = ({movies, title}) => {

    return (
        <div>
          <h1>{title}</h1>
          {movies.map((movie) => (
            <div key={movie._id}>
              <img src={movie.images} alt={movie.name} />
              <Link to={`/movie/${movie._id}`}>
                <h2>{movie.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      );
}

export default Movie