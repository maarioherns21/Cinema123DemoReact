import {Link} from "react-router-dom"
import './Style.css'

const  NavBar = () => {


    return (
      <div className="nav">
       <Link to="/" className='text'>Home</Link>
        <Link to="/form" className='text'>Form</Link>
        <Link className="text" to="/mymovies">
          My Movies
        </Link>
      </div>
    );
}

export default NavBar