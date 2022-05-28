import React from 'react';
import {img} from '../../img/img';

function Diagram(props) {
    console.log(img.imgJS);
    return (
        <div>Soy un diagrama
            <img src={img.imgJS}/>
        </div>
    )
}

export default Diagram;