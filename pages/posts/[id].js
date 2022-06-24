import styles from '../../styles/Notas.module.css';
import Title from '../../components/title';
import Content from '../../components/content';
import Header from '../../components/header';
import { createBlocks } from '../../lib/createBlocks';
import { posts } from '../../lib/posts'
import { rutesIds } from '../../lib/rutesIds'
import { icons } from '../../lib/icons'

// export let imgUrls = ["geekland.eu"];//🤠


export default function Post({ response , iconos }) {
    let bloques = createBlocks(response , iconos);

    return (
      <section className={styles.container}>
        <nav className={styles.nav}>
          <Header />
        </nav>
        {/* <Title lvl={1}>{response.resContainer.child_page.title}</Title> */}
        <Title lvl={1}>{response.resContainer.properties.title.title[0].plain_text}</Title>
        <Content>
          {process.env.VERCEL_URL}
          {bloques}
        </Content>
      </section>
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

  

