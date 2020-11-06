import React,{useState} from 'react';
import uuid from 'react-uuid';
import "./card.css";
const MovieForm = ({addMovie}) => {
    const [movie,setMovie] = useState({
        id:"",
        url:"",
        title:"",
        desc:"",
        rating:""
    });

    const handleUrlInputChange = e =>{
        setMovie({...movie, url: e.target.value});
    }
    const handleTitleInputChange = e =>{
        setMovie({...movie, title: e.target.value});
    }
    const handleDescInputChange = e =>{
        setMovie({...movie, desc: e.target.value});
    }
    const handleRatingInputChange = e =>{
        setMovie({...movie, rating: e.target.value});
    }
    const handleSubmit = e =>{
        e.preventDefault();
        if (movie.url.trim() && movie.title.trim() && movie.desc.trim() && movie.rating.trim()) {
            addMovie({...movie, id: uuid()});
            addMovie({...movie, id: uuid()});
            addMovie({...movie, id: uuid()});
            addMovie({...movie, id: uuid()});
            setMovie({...movie,url:"",rating:"",title:"",desc:""});
            

        }
    }

    const [isActive, setActive] = useState("true");
    const handleToggle = () => {
        setActive(!isActive);
      };
    return(
        <div className="containerForm" >
        <div>
        <form onSubmit={handleSubmit}>
            <button type="submit"onClick={handleToggle}style={{margin:"0",padding:"0"}}>ADD</button>
            <input 
                name="url"
                type="text"
                value={movie.url}
                onChange={handleUrlInputChange}
                placeholder="give movie image url"
                className={isActive ? "open" : null}
            />
            <input
                name="title"
                type="text"
                value={movie.title} 
                onChange={handleTitleInputChange}
                placeholder="give movie title"
                className={isActive ? "open" : null}
            />
            <input 
                name="desc"
                type="text"
                value={movie.desc} 
                onChange={handleDescInputChange}
                placeholder="give movie description"
                className={isActive ? "open" : null}
            />
            <input 
                name="rating"
                type="number"
                value={movie.rating} 
                onChange={handleRatingInputChange}
                placeholder="give movie rating"
                className={isActive ? "open" : null}
            />
        </form>
        </div>
        </div>
    )
}

export default MovieForm