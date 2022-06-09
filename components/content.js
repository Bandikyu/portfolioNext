import React from 'react';
//import Button from '../button/button';
// import Diagram from './diagram';
import styles from '../styles/Content.module.css';

//function Content(props) 
function Content({ children }){

    return (
        <div className={styles.content}> 
            <h2>Algunas de las tecnologias con las que trabajo</h2>
            {children}
        </div>
    )

}

export default Content;