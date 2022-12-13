import { Root, classes } from "./Styles"
import {Card, CardActions, CardContent, Typography, CardMedia, Button} from "@mui/material"
import {Link} from 'react-router-dom'
import { maxWidth } from "@mui/system";

const MovieCard = ({movie}) => {


  return (
    <Card component={Link} to={`/movie/${movie._id}`} style={{ backgroundColor: "inherit"}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={movie.name}
        height="450"
        image={movie.images}
      />
      <CardContent  style={{ display:"flex" , justifyContent: "center" }} >
      <Typography variant="h6" >
        {movie.name}
        </Typography>
      </CardContent>
    </Card>
  );


}

export default MovieCard


    






























