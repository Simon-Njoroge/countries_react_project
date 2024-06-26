import './hedear.scss'
import sun from '../images/icon-sun.svg'
import moon from '../images/icon-moon.svg'
import { useState } from 'react'

const Header=()=>{
    const [isMoon, setIsMoon] = useState(true); 

    const switching = () => {
        setIsMoon(!isMoon); 
        document.body.classList.toggle("back")
    };
    return(
        <>
       <div className="whole">
        <div className="left">
            <h1>Where in the word?</h1>
        </div>
        <div className="rigth">
            <img src={isMoon? moon:sun} alt="" onClick={switching}/>
        </div>
       </div>
        </>
    )
}
export default Header