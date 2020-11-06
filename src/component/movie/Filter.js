import React from 'react';
import MovieList from './MovieList'
import './card.css'
const Filter = ({movies}) =>{
    var moviesN = movies.sort((a,b) =>{
        if(a.name > b.name){
            return 1;
        }else{
            return -1;
        }
    })
    var moviesR = movies.sort((a,b) =>{
        if(a.rating > b.rating){
            return 1;
        }else{
            return -1;
        }
    })
    return(
        <div className="FilterContainer">
            <button onClick={movies = moviesN}>name</button>
            <button onClick={movies = moviesR}>rating</button>
        </div>
    )
}

export default Filter;