import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.contact}>
                <h3>Contact</h3>
                <div className={styles.img}></div>
            </section>
            <div className={styles.divider}></div>
            <section className={styles.details}>
                <ul>
                    <li>Sitio desarrollado en React.</li>
                    <li>SEO mejorado y obviado un poco el backend con Next.</li>
                    <li>Datos obtenidos mediante JSON desde la API oficial de Notion y Google Sheets (para mantenerlos actualizados).</li>
                    <li>Por mas detalles consultar About Site en About</li>
                </ul>
            </section>
            <div className={styles.divider}></div>
            <section className={styles.github}>
                <div>
                    {/* <div><a href='https://github.com/Bandikyu/portfolioNext'></a></div> */}
                    <div></div>
                    <iframe src='https://github.com/Bandikyu/portfolioNext'></iframe>
                </div>
            </section>
            
        </footer>
    )
}