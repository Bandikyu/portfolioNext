import styles from '../../styles/Notas.module.css';
import Title from '../../components/title';
import Content from '../../components/content';
import Header from '../../components/header';
import { createBlocks } from '../../lib/generateBlocks';
import {posts} from '../../lib/posts'
import {rutesIds} from '../../lib/rutesIds'


export default function Post({ response }) {
    let bloques = createBlocks(response);

    return (
      <section className={styles.container}>
        <nav className={styles.nav}>
          <Header />
        </nav>
        <Title lvl={1}>{response.resContainer.child_page.title}</Title>
        <Content>
          {bloques}
        </Content>
      </section>
    );
}

export async function getStaticPaths() {
    const resp = await rutesIds();
    const paths = resp;
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    let pagIds = await posts(params.id);
    let response = pagIds;
    return {
      props: {
        response,
      },
    };
  }

  

