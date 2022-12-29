import { Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

const ProfileHeader = () => {
  const user = JSON.parse(localStorage.getItem("token"));
  
  return (

    <Container  maxWidth="xl" fullWidth >
   <div className="profile" position="static" >
    <div style={{ paddingLeft:"30px", fontFamily:"fantasy"}}>Cinema123</div>
    <div>
        <Link to={`/user/${user?._id}`}>
          <img
            src={user.photoUrl}
            alt={user.username}
            style={{ height: "60px", borderRadius: "30px" }}
          />
        </Link></div>
        </div>
      </Container>

 


   

  );
};

export default ProfileHeader;
