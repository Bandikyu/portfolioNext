import styles from '../../styles/Notas.module.css';
import Title from '../../components/title';
import Content from '../../components/content';
import Header from '../../components/header';
import { createBlocks } from '../../lib/createBlocks';
import { posts } from '../../lib/posts'
import { rutesIds } from '../../lib/rutesIds'
import { icons } from '../../lib/icons'
import useScroll from '../../hooks/scroll'
import Footer from '../../components/footer';
import Front from '../../components/front';
import HeadTags from '../../components/headTags';


// export let imgUrls = ["geekland.eu"];//🤠


export default function Post({ response , iconos }) {
    let scroll = useScroll();

    let bloques = createBlocks(response , iconos);

    return (
      <div>
        {/*<nav className={styles.nav}>
          <Header scroll={scroll} />
        </nav> */}
        <HeadTags title={response.resContainer.properties.title.title[0].plain_text} description='Algunos de mis apuntes escritos en Notion.'/>

        <Front border={scroll}>
          <div>
            <Title lvl={1}>{response.resContainer.properties.title.title[0].plain_text}</Title>
          </div>
        </Front>
        <Header scroll={scroll} />
        <section className={styles.container}>
            <Content>
              <section className={styles.subContainer}>
                {process.env.VERCEL_URL}
                {bloques}
              </section>
            </Content>
        </section>
        <Footer/>
      </div>
    );
}

export async function getStaticPaths() {
    const resp = await rutesIds();

    const paths = resp.map(e=> ({params:{id:e}}));
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) {
  let pagIds = await posts(params.id);
  let response = pagIds;
  let iconos = await icons(response.resChildrens.results);

  return {
    props: {
      response,
      iconos
    },
  };
}

  

