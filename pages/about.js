import Front from '../components/front';
import Header from '../components/header';
import Title from '../components/title';
import Footer from '../components/footer';
import ContainerAbout from '../components/containerabout';
import useScroll from '../hooks/scroll';



export default function About() {
    let scroll = useScroll();

    return (
        <div style={{
            position: 'relative',
        }}
            className='principal'>
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
                    <Title className="targetTitle" lvl={2}>About me</Title>
                </label>

                <input type="radio" id="AboutSite" name="about" defaultChecked />
                <label htmlFor="AboutSite">
                    <Title className="targetTitle" lvl={2}>About site</Title>
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
                </label>

            </ContainerAbout>
            <Footer />
        </div>
    )



}