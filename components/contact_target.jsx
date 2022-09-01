import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactTarget(props) {
    const [stateStyle , setStateStyle] = useState(styles.targetContact)

    function handleClick() {
        if(props.mail && stateStyle === styles.targetContact){
            setStateStyle(styles.targetContactExpanded)
            console.log(stateStyle);
        } else {setStateStyle(styles.targetContact)}
    }

    return (
        <div className={stateStyle}>
            <h2>{props.title}</h2>
            {props.mail ? (
                <form id='form' className={styles.form}>
                    <input onClick={handleClick} value='✖' type='button'/>
                    <input placeholder='Email' type='mail' id='email'/>
                    <textarea id='message'></textarea>
                    <input value='Enviar' type='submit'/>
                </form>
            ) : false}

            <div className={styles.tgContactImg}>
                <Image alt={props.title} src={props.img} layout='fill'/>
            </div>
            <a onClick={handleClick} href={props.url} target='_blank'></a>
        </div>
    );
}