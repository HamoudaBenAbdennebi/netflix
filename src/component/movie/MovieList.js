import React from 'react';
import MovieCard from './MovieCard'
import "./card.css"
const MovieList = ({movies}) => {
    return(
        <div className="List">
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        </div>
    );
};

export default MovieList;