import { Button, TextField , Container, Paper, Grid} from "@mui/material";
import { useState } from "react"
import FileBase64 from "react-file-base64";
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.css"



const EditForm  = ({movie}) =>{
    const [formData, setFormData] =useState({ name: movie.name,  body: movie.body,  creator: movie.creator, images: movie.images, video: movie.video })
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate()
    const params = useParams()
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const movie = {
        name: formData.name,
        body: formData.body,
        creator: formData.creator,
        images: formData.images,
        video: formData.video,
      };
      setIsPending(true);
      await fetch(`http://localhost:4000/movies/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      }).then(() => {
        console.log(` ${movie.name} was updated in to the db`);
        setIsPending(false);
        navigate("/");
      });
    };
    
    const clear = (e) => {
      e.preventDefault();
      setFormData({ name: movie.name,  body: movie.body,  creator: movie.creator, images: movie.images, video: movie.video });
    };
    
    return (
      <Container  fullWidth component="main" maxWidth="xs" style={{ paddingBottom: "250px" }}>
         <Paper   className="paper" elevation={6}>  
          <Grid  item sm={6}>
        <form className="" onSubmit={handleSubmit}>
      <TextField   variant="standard" style={{ paddingBottom: '15px'}}  fullWidth  required label="title" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}   />
      <TextField   variant="standard" style={{ paddingBottom: '15px'}}  fullWidth  required label="body" value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})}  />
      <TextField   variant="standard" style={{ paddingBottom: '15px'}}  fullWidth  required label="video" value={formData.video} type="url" onChange={(e) => setFormData({...formData, video: e.target.value})}   />
        <FileBase64 value={formData.images} type="file" multiple={false} onDone={({base64}) => setFormData({...formData , images: base64})} /> 
         <Button   type="submit" fullWidth color="inherit">{isPending ? "Updating.." : "Update Movie"}</Button>
         <Button   type="submit" fullWidth color="inherit" onClick={clear} >clear</Button>
        </form>
        </Grid>
      </Paper>
  </Container>
    );

  
    }

export default EditForm