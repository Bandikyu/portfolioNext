import React from 'react';
import Link from 'next/link';
// import '../styles/index.css'; el mismo style que para las rutas dinamicas (todo de notion)
import Title from '../../components/title';
import Content from '../../components/content';
import Header from '../../components/header';
import {posts} from '../../lib/posts'
import styles from '../../styles/Notas.module.css';



export async function getStaticProps() {
  let response = await posts(process.env.ID_BASE_PAGE);
  return {
    props: {
      posts: response,
    }
  };
}

function Pru(props) {
  
  // let titulos = [];
/*   props.posts.resChildrens.results.forEach(e => {
    titulos.push(
      <Link key={e.id} href={`posts/${e.id}`}>
        <a>{e[e.type].title}</a>
      </Link>
      );
  }); */
  let bloques = [];
  props.posts.resChildrens.results.forEach(e => {
    if(e.type === 'child_page') {
      bloques.push(
        <Link key={e.id} href={`posts/${e.id}`}>
          <a className={styles[e.type]}>{e[e.type].title}</a>
        </Link>
        );
    };
  });
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <Header />
      </nav>
      {/* <Title lvl={1}>{props.posts.resContainer.child_page.title}</Title> */}
      <Title lvl={1}>{props.posts.resContainer.properties.title.title[0].plain_text}</Title>
        <Content>
          <section className={styles.indexNotas}>
            {bloques}
          </section>
        </Content>
    </section>
  );
    
}

export default Pru;