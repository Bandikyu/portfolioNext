import Link from 'next/link';
import Image from 'next/image';
import Title from '../../components/title';
import Content from '../../components/content';
import Header from '../../components/header';
import styles from '../../styles/Notas.module.css';
import { posts } from '../../lib/posts'
import { icons } from '../../lib/icons'
import useScroll from '../../hooks/scroll'
import Front from '../../components/front';
import Footer from '../../components/footer';
import HeadTags from '../../components/headTags';


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
    <HeadTags title={response.resContainer.properties.title.title[0].plain_text} description='Algunos de mis apuntes escritos en Notion.'/>
    <Front border={scroll}>
      <div>
        <Title lvl={1}>{response.resContainer.properties.title.title[0].plain_text}</Title>
      </div>
    </Front>
    <Header scroll={scroll} />
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