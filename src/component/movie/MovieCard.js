import React from 'react';
import MovieList from './MovieList';
import './card.css'
const MovieCard = ({movie}) =>{
    return(
        <div className="card">
            <img src={movie.url} alt="error"/>
            <h3>{movie.title}</h3>
            <div>
            <p>{movie.desc}</p>
            </div>
            <p>{movie.rating}</p>
        </div>
    )
}

export default MovieCard