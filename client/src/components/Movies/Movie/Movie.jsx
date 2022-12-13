import {CssBaseline, Grid, Typography} from "@mui/material"
import MovieCard from "./MovieCard";
import { Root, classes } from "./Styles";

import "./style.css"



const Movie = ({ movies, title }) => {
  return (
    <Root>
      <Typography variant="h4" align="center">{title}</Typography>
      <br/>
      <Grid className="flex" container spacing={4}>
        {movies.map((movie) => (
          <Grid item key={movie._id} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Root>
  );
}

export default Movie
//   return (
//     <div>
//       <h1>{title}</h1>
//       {movies.map((movie) => (
//         <div key={movie._id}>
//           <MovieCard movie={movie} />
//         </div>
//       ))}
//     </div>
//   );
// };

















