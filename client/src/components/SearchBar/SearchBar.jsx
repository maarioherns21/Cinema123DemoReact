import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "./SearchBar.css";
import { Button, CardMedia, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";



const SearchBar = ({ movies }) => {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);


  
  useEffect(() => {
    setOutput([]);
    movies.filter((movie) => {
      if (movie.name.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, movie]);
      }
    });
  }, [input]);




  return (
    <div>
      <Container>
        <TextField
          variant="standard"
          label="search"
          onChange={(e) => setInput(e.target.value)}
         />
        <Popup trigger={ <Button> <SearchIcon fontSize="small" /> </Button>} >
          <Container  fullWidth component="main"  style={{ paddingBottom: "250px" }}>
            {output.map((movie) => (  
            <Paper elevation={6}>  
               <Grid item key={movie._id}  >
                 
                  <Link to={`/movie/${movie._id}`}> 
                  <CardMedia component="img"  alt={movie.name}  height="650" width="900" image={movie.images} />
                    <Typography variant="h5" >{movie.name}</Typography>
                  </Link>
              </Grid>  
          </Paper> 
              ))}
          </Container>  
        </Popup>
      </Container>
    </div>
  );
};

export default SearchBar;
