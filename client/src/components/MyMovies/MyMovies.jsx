import { Avatar, Card, CardActions, CardContent, CardMedia, CircularProgress, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import Movie from "../Movies/Movie/Movie";
import useFetch from "../useFetch/useFetch";






const MyMovies = ({logout}) => {
    const { movies, isLoading, error } = useFetch();
    const user = JSON.parse(localStorage.getItem("token"));
    const fetchMovies = movies.filter((movie) => movie.creator === user?._id);
    const load =  <Paper elevation={6} style={{  display: "flex", justifyContent: "center",  alignItems: "center",
      padding: "20%" ,  height: "39vh", }}><CircularProgress size="7em" /></Paper>;

    return (
      <div>
        <br/>
        <Container>
          <CardContent>
            <Avatar   sx={{ width: 270, height: 270 }}>
           <CardMedia  component="img" image={user.photoUrl} alt={user.username}  /> 
        </Avatar>
        <Typography gutterBottom variant="h3">{user.username}</Typography>
        <Typography gutterBottom variant="h4" >{user.bio}</Typography> 
          </CardContent>
        </Container>
       
        <div>{error ? error : null}</div>
        <div>{isLoading ? load : "" }</div>
        <Movie movies={fetchMovies} title={`${user.username}'s movies`} />
      </div>
    );
    
}

  //  <Link to="*/" onClick={logout}>Log out</Link>

export default MyMovies