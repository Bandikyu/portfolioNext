import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactTarget(props) {
    const [stateStyle , setStateStyle] = useState(styles.targetContact)
    const [open , setOpen] = useState(false)

    function handleClick() {
        if(props.mail && stateStyle === styles.targetContact){
            setStateStyle(styles.targetContactExpanded)
        } else {setStateStyle(styles.targetContact)}
    }
    function submitHandler(event) {

        let email = event.target.email.value;
        let message = event.target.message.value;
        fetch('/api/sheetsApi', {
            method: 'POST',
            body: JSON.stringify({email , message}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        event.preventDefault();
        alert('Mensaje Enviado');
        event.target.reset();
        
        setStateStyle(styles.targetContact);
    }

    return (
        <div className={stateStyle}>
            <h2>{props.title}</h2>
            {props.mail ? (
                    <form onSubmit={submitHandler}  id='form' className={styles.form}>
                        <input onClick={handleClick} value='✖' type='button'/>
                        <input placeholder='Email' type='mail' id='email' name='email'/>
                        <textarea id='message' name='message'></textarea>
                        <input  value='Enviar' type='submit'/>
                    </form>
            ) : false}
            <div className={styles.tgContactImg}>
                <Image alt={props.title} src={props.img} layout='fill'/>
            </div>
            <a onClick={handleClick} href={props.url} target='_blank'></a>
        </div>
    );
}