import React from 'react';
import './button.css';

function Button(props) {
    return (
        <div className='button'>
            <div>
                <a target="_blank" rel="noreferrer" href={props.href}>{props.text}</a>
            </div>
        </div>
    )
}

export default Button;