import Link from 'next/link';
import Image from 'next/image';
// import '../styles/index.css'; el mismo style que para las rutas dinamicas (todo de notion)
import Title from '../../components/title';
import Content from '../../components/content';
import Header from '../../components/header';
import styles from '../../styles/Notas.module.css';
import {posts} from '../../lib/posts'
import { icons } from '../../lib/icons'
import useScroll from '../../hooks/scroll'
import Front from '../../components/front';
import Footer from '../../components/footer';


export async function getStaticProps() {
  let response = await posts(process.env.ID_BASE_PAGE);
  let iconos = await icons(response.resChildrens.results);

  return {
    props: {
      response,
      iconos
    }
  };
}

function IndexBlock({response , iconos}) {
  let scroll = useScroll();
  let bloques = [];
  response.resChildrens.results.forEach(e => {
  if(e.type === 'child_page') {
    let icono;
    iconos.forEach(i => i.id === e.id ? icono = i.icon : false)
    bloques.push(
      <div key={bloques.length} className={styles.link}>
        <Link key={e.id} href={`posts/${e.id}`}>
          <a className={styles[e.type]}>
            {// @ts-ignore
              !!icono ? ((!!icono.url) ? <Image width={25} height={25} style={{borderRadius:'50%'}} src={icono.url}/> : icono) : false
            }
            {e[e.type].title}
          </a>
        </Link>
      </div>
      );
  }
})

return (
  <div>
    <Front border={scroll}>
      <div>
        {/* <h1>Mis Notas</h1> */}
        <Title lvl={1}>{response.resContainer.properties.title.title[0].plain_text}</Title>
        {/*<div>
            Este es mi portafolio en desarrollo online, espero que puedas encontrar informacion interesante sobre TIC y/o sobre mi.
        </div> */}
      </div>
    </Front>
    {/*<nav className={styles.nav}>
      <Header scroll={scroll} />
    </nav> */}
    <Header scroll={scroll} />
    {/* <Title lvl={1}>{props.posts.resContainer.child_page.title}</Title> */}
    <section className={styles.container}>
      <Content>
        <section className={styles.indexNotas}>
          {bloques}
        </section>
      </Content>
    </section>
    <Footer/>
  </div>
);
    
}

export default IndexBlock;