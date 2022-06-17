import React from 'react';
import Link from 'next/link';
// import '../styles/index.css'; el mismo style que para las rutas dinamicas (todo de notion)
import Title from '../../components/title';
import Content from '../../components/content';
import Header from '../../components/header';
import {posts} from '../../lib/posts'
import styles from '../../styles/Notas.module.css';



export async function getStaticProps() {
  // let response = await posts('5f28676954394485a6db3de0b592a862');
  let response = await posts('523abbcb04c541349b2e039fa24c2518');
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
      <Title lvl={1}>{props.posts.resContainer.child_page.title}</Title>
        <Content>
          <section className={styles.indexNotas}>
            {bloques}
          </section>
        </Content>
    </section>
  );
    
}

export default Pru;