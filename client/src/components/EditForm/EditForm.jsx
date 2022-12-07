import { useState } from "react"
import FileBase64 from "react-file-base64";
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.css"



const EditForm  = ({movie}) =>{
    const [formData, setFormData] = useState({ name: movie.name,  body: movie.body, creator: movie.creator, images: movie.images});
    const params =useParams()
    const [isPeding, setIsPending] =useState(false)
    const navigate = useNavigate()
    
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const movie = {
        name: formData.name,
        body: formData.body,
        creator: formData.creator,
        images: formData.images,
      };
      setIsPending(true);
      const createMovie = await fetch(`http://localhost:4000/movies/${params.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      })
        //   const results = await createMovie.json();
        //   setFormData((prev) => [...prev, results], navigate("/"));
        .then(() => {
          setIsPending(false);
          navigate("/");
          console.log(` ${movie.name} was updated to the db`);
        });
     
    };
    
    const clear = (e) => {
      e.preventDefault();
      setFormData({ name: movie.name,  body: movie.body, creator: movie.creator, images: movie.images });
    };
    
    
    
    return (
      <div className="form modal">
        <form className="modal-content" onSubmit={handleSubmit} >
          <input value={formData.name} onChange={(e) => setFormData({...formData , name: e.target.value})} />
          <textarea value={formData.body} onChange={(e) => setFormData({...formData , body: e.target.value})}/>
          <select value={formData.creator} onChange={(e) => setFormData({...formData , creator: e.target.value})} >
            <option value="mario">mario</option>
            <option value="mark">mark</option>
          </select>
          <FileBase64 value={formData.images} type="file" multiple={false} onDone={({base64}) => setFormData({...formData, images: base64})} />
          <button>{isPeding ? "Updating.." : "Update Movie"}</button>
          <button onClick={clear}>clear</button>
        </form>
      </div>
    );
    }


export default EditForm