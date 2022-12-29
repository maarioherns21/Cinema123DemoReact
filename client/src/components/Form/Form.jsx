import { useState } from "react"
import FileBase64 from "react-file-base64";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css"
import { Step, Paper, Stepper, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline, Container } from "@mui/material";
import FormData from "./FormData";
import FormImages from "./FormImages";
import { Root, classes } from "./style";
const steps = ["Movie Details" , "Submit Movie"];

const Form = () => {
const [activeStep, setActiveStep] = useState(1);
const user = JSON.parse(localStorage.getItem('token'))

const [formData, setFormData] =useState({ name: "", body: "", creator: "", images: "", video: ""  })
const [isPending, setIsPending] = useState(false);
const navigate = useNavigate()


// console.log(user)

const handleSubmit = async (e) => {
  e.preventDefault();
  const movie = {
    name: formData.name,
    body: formData.body,
    creator: user?._id,
    images: formData.images,
    video: formData.video,
  };
  setIsPending(true);
await fetch("https://cinemademo123.herokuapp.com/movies/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  }).then(() => {
    console.log(`${movie.name} was added to db`);
    setIsPending(false);
    navigate("/");
  });
};

const clear = (e) => {
e.preventDefault() 
setFormData({ name: "", body: "", creator: "mario", images: "", video: "" })};



const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);




return (
  <Root>
    <CssBaseline />
    <main className={classes.layout}>
    <Container fullWidth component="main" maxWidth="xs" style={{ paddingBottom: "250px" }}>
    <Paper className="paper" elevation={6}>
      <Typography variant="h4" align="center">Add Movies</Typography>
      <div className={classes.content} />
        <form onSubmit={handleSubmit}>
            <Stepper activeStep={activeStep} className={classes.stepper} >
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <FormImages setFormData={setFormData} formData={formData} FileBase64={FileBase64} backStep={backStep} />
            ) : (
            <FormData clear={clear} setFormData={setFormData} formData={formData}  nextStep={nextStep} />
            )} 
       </form>
       </Paper>
       </Container> 
     </main>
   
</Root>
 
  
);


}

export default Form