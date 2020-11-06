import React,{useState} from 'react';
import './Header.css'
import { FaChevronCircleDown } from 'react-icons/fa';
const Header = () => {
    var show = false;
    const [showing,setShowing] = useState([])
    return(
        <>
        <div className="NavBar"style={{zIndex: "100"}}>
            <h1>FILXNET</h1>
            <div>
                <p className="P">Home</p>
                <p className="P">Movies</p>
                <p className="P">Contact</p>
                <p className="S" style={{fontSize:"30px",padding:"0",marginTop:"5px"}} onClick={!show}><FaChevronCircleDown/></p>
                
            </div>
            
        </div>
        <div className={show?"ok":"no"} style={{textAlign:"center"}}>
            <p style={{backgroundColor:"#262626",padding: "15px",borderBottom: "1px solid white",cursor: "pointer"}}>Home</p>
            <p style={{backgroundColor:"#262626",padding: "15px",borderBottom: "1px solid white",cursor: "pointer"}}>Movies</p>
            <p style={{backgroundColor:"#262626",padding: "15px",borderBottom: "1px solid white",cursor: "pointer"}}>Contact</p>
        </div>
        </>
    )
}

export default Header
