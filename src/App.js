import React,{useState} from 'react';
import './App.css';
import Header from './component/Header';
import Filter from './component/movie/Filter';
import MovieForm from "./component/movie/MovieForm"
import MovieList from "./component/movie/MovieList"
const App = () => {

  const [movies,setMovies] = useState([]);

  const addMovie = movie =>{
    setMovies([movie,...movies]);
  }

  return (
    <>
      <Header/>
      <Filter movies={movies}/>
      <MovieForm addMovie={addMovie}/>
      <MovieList movies={movies}/>
    </>
  );
}

export default App;
