import React from 'react';
import styles from '../styles/Content.module.css';

//function Content(props) 
function Content(props){
    return (
        <div  className={styles.content}> 
            {props.children}
        </div>
    )

}


export default Content;