import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css'



const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt>
            <div className="tilt" style={{ width: 150, height: '150px', backgroundColor: 'darkgreen' }} >
            <div className="tilt-innar pa3">
                <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
            </div>
            </div>
            </Tilt>
        </div>
    )
}

export default Logo;