import React from 'react';
import styles from '../styles/Button.module.css';
import Link from 'next/link';


function Button(props) {
    return (
        <div className={styles.button}>
            <div>
                {/* <a target="_blank" rel="noreferrer" href={props.href}>{props.text}</a> */}
                <Link href={props.href} className='button'>
                    <a>{props.text}</a>
                </Link>
            </div>
        </div>
    )
}

export default Button;