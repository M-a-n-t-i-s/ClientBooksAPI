import preloader from "../../../assets/1487.gif";
import React from "react";

let Preloader = () => {
    return <div style={ { backgroundColor: 'white', marginTop: '10vw' } }>
        <img src={preloader} alt='loading'/>
    </div>
}
export default Preloader;