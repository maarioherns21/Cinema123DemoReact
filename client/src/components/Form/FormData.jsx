import { Button, Grid, TextField } from "@mui/material";



export default function FormData ({clear, setFormData, formData, nextStep}) {
    return (
    <div>
    <Grid  item sm={6}>
    <TextField label="title" variant="standard" style={{ paddingBottom: '15px'}}  fullWidth  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
    <TextField  label="body" variant="standard" style={{ paddingBottom: '15px'}}  fullWidth  value={formData.body} onChange={(e) => setFormData({...formData, body: e.target.value})}  />
    <Button  variant="primary" onClick={nextStep}>next</Button>
    <Button  variant="outlined" onClick={clear}>clear</Button>
    </Grid>
    </div>
    )
}
