import styles from '../styles/Front.module.css';

function Front(props) {
    return (
        <section
        style={props.border>150 ? {
            borderBottomLeftRadius: `${200/(props.border+1)}px ${100/(props.border+1)}px` ,
            borderBottomRightRadius: `${200/(props.border+1)}px ${100/(props.border+1)}px`
        } : {border: ''}}
        className={styles.front}>
            {props.children}    
        </section>
    )
    
}


export default Front;