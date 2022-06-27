import styles from '../styles/Content.module.css';

//function Content(props) 
function Content({ children }){

    return (
        <div className={styles.content}> 
            {children}
        </div>
    )

}

export default Content;