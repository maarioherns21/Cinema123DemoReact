import { Button, Grid, TextField } from "@mui/material";

 
export default function FormImages ({ backStep, FileBase64, formData, setFormData}) {
    return (
        <div>
        <Grid  item sm={6}>
       <TextField label="Video" variant="standard" style={{ paddingBottom: '25px'}}  fullWidth  value={formData.video} type="url" onChange={(e) => setFormData({...formData, video: e.target.value})}  />
      <FileBase64  value={formData.images} type="file" multiple={false} onDone={({base64}) => setFormData({...formData , images: base64})} />
       <br />  <br /> 
      <Button type="submit" variant="outlined">Add Movie</Button>
      <Button  variant="outlined" onClick={backStep}>back</Button>
       </Grid> </div>
        )
}