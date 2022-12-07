import Harry from "../assests/HarryPotter.jpg"
import Thor from "../assests/Thor.jpg"
import Ghost from "../assests/ghostbuster.png"
import { useEffect } from "react";
import { useState } from "react";

export default function useFetch () {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      fetch("http://localhost:4000/movies")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
        console.log(data)
          setMovies(data);
          setError(false);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, []);


    return {
   movies, error, isLoading
    }
}

