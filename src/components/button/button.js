import React from 'react';
import './button.css';

function Button(props) {
    return (
        <div className='button'>
            <a target="_blank" rel="noreferrer" className={props.className} href={props.href}>{props.text}</a>
        </div>
    )
}

export default Button;