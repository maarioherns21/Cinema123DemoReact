import Popup from "reactjs-popup"
import EditForm from "../../../EditForm/EditForm"


const MovieItem = ({movie, handleDelete}) => {


    return (
        <div>
        <h1>{movie.name}</h1>
        <img src={movie.images} alt={movie.name} />
        <h2>{movie.body}</h2>
        <h3>{movie.creator}</h3>
        <button onClick={handleDelete}>Delete</button>
        <Popup trigger={<button>Update</button>}>
            <EditForm movie={movie}/>
        </Popup>
      </div>
    )
}

export default MovieItem