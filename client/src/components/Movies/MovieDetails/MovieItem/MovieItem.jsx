import Popup from "reactjs-popup"
import EditForm from "../../../EditForm/EditForm"
import ReactPlayer from "react-player"
import { Button, CssBaseline, Divider, Paper, Typography, Grid, Card, CardContent, CardActions, Container, CardMedia } from "@mui/material";
import { Root, classes } from "./useStyles";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';



const MovieItem = ({ movie, handleDelete }) => {
  
  
  
  return (
    <Root>
      <CssBaseline />
      <Card style={{ paddingTop: "20px" }} elevation={6}>
        <div >
        <Typography style={{ display:"flex" , justifyContent: "center"}} gutterBottom variant="h3" component="h3">
              {movie.name}
            </Typography>
          {/* <div className={classes.imageSection} style={{ padding: "60px" }}> */}
        
        
         <CardActions  style={{ display:"flex" , justifyContent: "center"}}>
        <CardMedia component="img"  className={classes.media}  image={ movie.images } alt={movie.name} />
          </CardActions>
          <CardActions style={{ display:"flex" , justifyContent: "center", paddingTop: '20px'}} >
              <ReactPlayer  url={movie.video} config={{  youtube: {playerVars : {showinfo: 1}}}}  />
            </CardActions>
          {/* </div> */} 
          <CardContent  >
          <CardActions style={{ display:"flex" , justifyContent: "center"}} >
                <Popup trigger={<Button><CreateOutlinedIcon fontSize="large" /></Button>}>
              <EditForm  movie={movie} />
            </Popup>
            <Button onClick={handleDelete}><DeleteForeverOutlinedIcon fontSize="large" color="error" /></Button>
            </CardActions>
            <Typography  style={{ paddingTop: "20px"}} gutterBottom variant="body1" component="p">
              {movie.body}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Realtime Chat - coming soon!</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              <strong>Comments - coming soon!</strong>
            </Typography>
            <Divider style={{ margin: "20px 0" , paddingBottom: "100px"}} />
          
              </CardContent>    
            
        </div>
      </Card>
    </Root>
  );
};

export default MovieItem;


// config={{  youtube: {playerVars : {showinfo: 1}}}} 

