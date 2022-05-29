import React from 'react';
import './diagram.css'
import {imgs} from '../../img/img';

function Diagram(props) {
    let imgDiagrams = [];
/*     for(let img in imgs) {
        imgDiagrams.push(
            <li><img src={imgs[img]}/>{imgs.img}</li>
        );
    } */
    
    //console.log(array);
    return (
        <ul className='diagrams-container'>
            {/* {imgDiagrams[2]} */}
            <li className='diagram'>
                <h3>CSS</h3>
                <ul>
                    <li>Sintaxis</li>
                    <li>Selectors</li>
                    <li>Cascada y Herencia</li>
                    <li>Pseudo-Elemento</li>
                    <li>Pseudo-Clase</li>
                    <li>Transition</li>
                    <li>Transform</li>
                    <li>Funciones</li>
                    <li>BackGrounds and Borders</li>
                    <li>Position</li>
                    <li>FlexBox</li>
                    <li>Grid</li>
                </ul>
                <img src={imgs.imgCSS}/>
            </li>
        </ul>
    )
}

export default Diagram;