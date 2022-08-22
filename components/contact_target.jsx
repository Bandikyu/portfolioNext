import styles from '../styles/Contact.module.css';
import Image from 'next/image';

export default function ContactTarget(props) {

    return (
        <div className={styles.targetContact}>
            <h2>{props.title}</h2>
            <div className={styles.tgContactImg}>
                <Image alt='gmail' src={props.img} layout='fill'/>
            </div>
            <a href={props.url} target='_blank'></a>
        </div>
    );
}