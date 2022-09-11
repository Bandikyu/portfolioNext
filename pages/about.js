import Front from '../components/front';
import Header from '../components/header';
import Title from '../components/title';
import Footer from '../components/footer';
import ContainerAbout from '../components/containerabout';
import useScroll from '../hooks/scroll';
import Link from 'next/link';
import HeadTags from "../components/headTags";


export default function About() {
    let scroll = useScroll();

    return (
        <div style={{
            position: 'relative',
        }}
            className='principal'>
            <HeadTags title='About' description='Sobre mi y este sitio 😀'/>
            <Front border={scroll}>
                <div>
                    <h1>About</h1>
                    <div>Sobre mi y este sitio 😀</div>
                </div>
            </Front>
            <Header scroll={scroll} />
            <ContainerAbout>

                <input type="radio" id="AboutMe" name="about" />
                <label htmlFor="AboutMe">
                    <Title className="targetTitle" lvl={2}>About me ✍️</Title>
                </label>

                <input type="radio" id="AboutSite" name="about" defaultChecked />
                <label htmlFor="AboutSite">
                    <Title className="targetTitle" lvl={2}>About site 💻</Title>
                    <p>
                        Este sitio fue desarrollado en React, utilizando Next para optimizar
                        el rendimiento gracias a sus herramientas y metodos.
                    </p>
                    <br/>
                    <p>
                        Utilizo Vercel para facilitar el backend.
                    </p>
                    <br/>
                    <p>
                        Algunos datos del home page son obtenidos de googlesheets en formato JSON y haciendo uso
                        de "retrive" con Next puedo mantenerlos actualizados en tiempo "casi real".
                    </p>
                    <br/>
                    <p>
                        Los datos para <Link href='/posts'>Mis Notas</Link> los traigo de Notion por medio de su API oficial.
                        La reestructuracion del JSON obtenido de Notion API y la implementacion de estilos en cada uno de sus bloques
                        fue realizado por mi cuenta. (Aun quedan bloques por agregar, y mejorar algunas caracteristicas generales).
                    </p>
                    <Title lvl={3}>Estilos</Title>
                    <ul>
                        <li>General</li>
                        <li>--time-transition: 0.1s</li>
                        <li>Colores</li>
                        <li>--primary-color: hsl(232, 43%, 36%)</li>
                        <li>--primary-color-Opac: hsl(232, 43%, 25%)</li>
                        <li>--primary-color-Lum: hsl(232, 43%, 60%)</li>
                        <li>--secondary-color: hsl(204, 59%, 60%)</li>
                        <li>--secondary-color-Lum: hsl(204, 59%, 95%)</li>
                        <li>--other-color: hsl(0, 0%, 92%)</li>
                        <li>--other-color-2: hsl(32, 84%, 83%)</li>
                        <li>--background-gradient: linear-gradient(0deg , var(--secondary-color) , var(--primary-color-Opac))</li>
                        <li>Bordes</li>
                        <li>--border-primary: 10px</li>
                        <li>--border-radius: 40px</li>
                    </ul>
                </label>

            </ContainerAbout>
            <Footer />
        </div>
    )



}