import { useState } from "react";
import FileBase64 from "react-file-base64";
import PropTypes from 'prop-types'
import "./LoginPage.css"
import { Link } from "react-router-dom";
import { Avatar ,Button, Paper, Grid, Typography, Container, Divider, TextField, CssBaseline } from "@mui/material"
import { LockOutlined } from "@mui/icons-material"


const LoginPage = ({ setToken }) => {
  const [error, setError] = useState([]);
  const [signForm, setSignForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = { email: signForm.email, password: signForm.password };
    await fetch("https://cinemademo123.herokuapp.com/user/login", {
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
    <Container fullWidth component="main" maxWidth="xs" style={{ paddingBottom: "350px" }} >
      <Paper className="paper" elevation={6}>
        <h1>{error ? error : null}</h1>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Avatar className="avatar" >
          <LockOutlined color="white"  />
        </Avatar>
        <Divider />
        <br />
        <form onSubmit={handleSubmit}>
          <Grid  item sm={6}>
            <TextField  variant="standard" style={{ paddingBottom: '20px'}}  fullWidth  required name="email"  label="email" value={signForm.email}  onChange={(e) =>  setSignForm({ ...signForm, email: e.target.value })} />
      
            <TextField  variant="standard" style={{ paddingBottom: '20px'}}  fullWidth  required name="password" label="password"  value={signForm.password}  onChange={(e) =>  setSignForm({ ...signForm, password: e.target.value })  } />
           
            <Button  type="submit" fullWidth color="inherit">
              Log in
            </Button>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button style={{ fontSize: "10px" }}>
                <Link to="/signup">Don't have an account? Sign Up</Link>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </>
  );
};

// LoginPage.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default LoginPage