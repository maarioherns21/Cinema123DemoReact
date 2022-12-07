import { useState } from "react"
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import "./Form.css"



const Form = () => {
const [formData, setFormData] = useState({ name: "",  body: "", creator: "mario", images: "" });
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
  const createMovie = await fetch("http://localhost:4000/movies/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  })
    //   const results = await createMovie.json();
    //   setFormData((prev) => [...prev, results], navigate("/"));
    .then(() => {
      setIsPending(false);
      navigate("/");
      console.log(` ${movie.name} was added to the db`);
    });
 
};

const clear = (e) => {
  e.preventDefault();
  setFormData({ name: "", body: "", creator: "mario", images: "" });
};




return (
  <div className="form">
    <form onSubmit={handleSubmit} >
      <input value={formData.name} onChange={(e) => setFormData({...formData , name: e.target.value})} />
      <textarea value={formData.body} onChange={(e) => setFormData({...formData , body: e.target.value})}/>
      <select value={formData.creator} onChange={(e) => setFormData({...formData , creator: e.target.value})} >
        <option value="mario">mario</option>
        <option value="mark">mark</option>
      </select>
      <FileBase64 value={formData.images} type="file" multiple={false} onDone={({base64}) => setFormData({...formData, images: base64})} />
      <button>{isPeding ? "Adding.." : "Add Movie"}</button>
      <button onClick={clear}>clear</button>
    </form>
  </div>
);
}

export default Form