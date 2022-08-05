import styles from '../styles/ContainerAbout.module.css';


export default function ContainerAbout({children}) {
    return (
        <section className={styles.containerAbout}>
            {children}
        </section>
    );
}