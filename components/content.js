import React from 'react';
//import Button from '../button/button';
// import Diagram from './diagram';
import styles from '../styles/Content.module.css';

//function Content(props) 
function Content({ children }){

    return (
        <div className={styles.content}> 
            {children}
        </div>
    )

}

export default Content;