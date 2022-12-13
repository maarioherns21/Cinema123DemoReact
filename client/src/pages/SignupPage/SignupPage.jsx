import { useState } from "react";
import FileBase64 from "react-file-base64";
import PropTypes from 'prop-types'
import "./SignupPage.css"
import { Avatar ,Button, Paper, Grid, Typography, Container, Divider, TextField, CssBaseline,  } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from "react-router-dom";


const SignUpPage = ({setToken}) => {
  const [error, setError] = useState([]);
  const [signForm, setSignForm] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    photoUrl: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = {
      username: signForm.username,
      email: signForm.email,
      password: signForm.password,
      photoUrl: signForm.photoUrl,
      bio: signForm.bio,
    };
    await fetch("http://localhost:4000/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(token),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToken(data);
        setError(null);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <>
    <Container fullWidth component="main" maxWidth="xs" style={{ paddingBottom: "250px" }}>
    <Paper className="paper" elevation={6}>
      <h1>{error ? error : null}</h1>
      <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Avatar className="avatar" >
          <AccountCircleIcon  color="white"  />
        </Avatar>
        <Divider />
        <br />
      <form onSubmit={handleSubmit}>
      <Grid  item sm={6}>
      <TextField   variant="standard" style={{ paddingBottom: '15px'}}  fullWidth  required label="username" value={signForm.username} onChange={(e) =>  setSignForm({...signForm, username: e.target.value})}  />
      <TextField   variant="standard"  style={{ paddingBottom: '15px'}}  fullWidth  required  label="email"   value={signForm.email} onChange={(e) =>  setSignForm({...signForm, email: e.target.value})}  />
      <TextField   variant="standard" style={{ paddingBottom: '15px'}}  fullWidth  required  label="password" value={signForm.password} onChange={(e) =>  setSignForm({...signForm, password: e.target.value})} />
      <TextField   variant="standard" fullWidth label="bio" style={{ paddingBottom: '15px'}}  value={signForm.bio} onChange={(e) =>  setSignForm({...signForm, bio: e.target.value})}   />
      <FileBase64   type="file" value={signForm.photoUrl} multiple={false} onDone={({base64}) =>  setSignForm({...signForm, photoUrl: base64})}   />
         <Button  type="submit" fullWidth color="inherit">Sign up</Button>
         </Grid>
         <Grid container justifyContent="flex-end">
            <Grid item>
              <Button style={{ fontSize: "10px" }}>
                <Link to="/login">have an account? Log in</Link>
              </Button>
            </Grid>
          </Grid>
      </form>
      </Paper>
  </Container>
  </>
  );
}

// SignUpPage.propTypes = {
//   setToken: PropTypes.func.isRequired
// }


export default SignUpPage;
