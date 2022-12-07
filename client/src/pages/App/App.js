import Movies from "../../components/Movies/Movies"
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "../Home/Home"
import MovieDetails from "../../components/Movies/MovieDetails/MovieDetails"
import NavBar from "../../components/NavBar/NavBar"
import MyMovies from "../../components/MyMovies/MyMovies"
import Form from '../../components/Form/Form'
import LoginForm from "../../components/LoginForm/LoginForm"
import useToken from "../../components/useToken/useToken"




const App = () => {

const {token, setToken} =useToken()

if(!token) {
    return <LoginForm setToken={setToken} />
}
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movie/:id" element={<MovieDetails />}/>
            <Route exact path="/mymovies" element={<MyMovies />}/>
            <Route exact path="/form" element={<Form />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App