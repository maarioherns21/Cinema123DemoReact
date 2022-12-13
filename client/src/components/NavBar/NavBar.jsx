import {Link} from "react-router-dom"
import useToken from "../useToken/useToken"
import './Style.css'
import { Typography, Toolbar, Avatar, Button, Container, Paper} from "@mui/material"
import SearchBar from "../SearchBar/SearchBar"
import useFetch from "../useFetch/useFetch"
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from "@mui/material/IconButton";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const  NavBar = ({logout}) => {
 
const user  = JSON.parse(localStorage.getItem("token"))
 ///this is also the token^^^^^^^^^
 const {movies} =useFetch()
    return (
      <Paper>
        <Container maxWidth="xl" fullWidth>
       
          <div className="appBar" position="static" color="secondary">
             <SearchBar movies={movies} /> 
            <div >
              <IconButton  component={Link} to="/">
                  <HomeOutlinedIcon fontSize="small"  />
                 </IconButton>
                 <IconButton  component={Link} to="/form">
                  <AddBoxOutlinedIcon fontSize="small" />
                 </IconButton>
               <IconButton  className="heading"  to="*/"  onClick={logout}  component={Link} >
                <LogoutIcon fontSize="small" />
               </IconButton> 
            </div>
            </div>
        </Container>
      </Paper>
    );
}

export default NavBar

/* <Link to="/" className='text'>Home</Link> */
        //* <Link to="/form" className='text'>Form</Link>
        // <Link to="*/" onClick={logout}>logout</Link>
        // <Link to={`/user/${user?._id }`} >
        // <img src={user.photoUrl}  alt={user.username} style={{ height: "50px",  borderRadius: "20px"}}/>
        // </Link> */