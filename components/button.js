import React from 'react';
import styles from '../styles/Button.module.css';

function Button(props) {
    return (
        <div className={styles.button}>
            <div>
                <a target="_blank" rel="noreferrer" href={props.href}>{props.text}</a>
            </div>
        </div>
    )
}

export default Button;