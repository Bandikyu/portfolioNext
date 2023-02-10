import React from 'react';
import styles from '../styles/Titles.module.css';



function Title(props) {
    if(props.lvl === 1){
        return (<h1 className={styles.h1}>{props.children}</h1>)
    }
    if(props.lvl === 2){
        return (<h2 className={styles.h2}>{props.children}</h2>)
    }
    if(props.lvl === 3){
        return (<h3 className={styles.h3}>{props.children}</h3>)
    }
    // return <h1 className={props.lvl}>{ props.children }</h1>
}

export default Title;