import Link from 'next/link';
import Image from 'next/image';
import {posts} from '../../lib/posts'
import {rutesIds} from '../../lib/rutesIds'
import styles from '../../styles/Notas.module.css';
import Title from '../../components/title';
import Content from '../../components/content';
import Header from '../../components/header';



// export let imgUrls = ["geekland.eu"];🤠

export default function Post({ response }) {
    let bloques = [];
    let otherBlocks = [];
    console.time('[id].js - forEach');
    
    
    response.resChildrens.results.forEach(e => {
      
            /*else if(e.type === 'image') {
        bloques.push(
          <Image key={e[e.type].external.url} alt='' src={e[e.type].external.url} width={200} height={200}/>
        )
      } */ //🤠 buscar una forma de exportar las url de las imagenes a next.config.js antes de exportar el modulo alla
      if(e.type === 'child_page') {
        bloques.push(
          <Link key={e.id} href={`${e.id}`}>
            <a className={styles[e.type]}>{e[e.type].title}</a>
          </Link>
          );
      } 
      else if(e.type === 'paragraph'){
        let paragraph = '';
        e[e.type].rich_text.forEach(p => 
          paragraph = paragraph.concat(p.plain_text)
        );
        bloques.push(
          <p key={bloques.length} className={styles[e.type]}>{paragraph}</p>
        );
      }
      else if(e.type.match(/heading_[1-3]/)) {
        let paragraph = '';
        e[e.type].rich_text.forEach(p => 
          paragraph = paragraph.concat(p.plain_text)
        );
        bloques.push(
          <Title lvl={Number(e.type.slice(-1))} key={bloques.length}>{paragraph}</Title>
        );
      }
      else otherBlocks.push(e); //aca puedo ver los bloques que no entran a la pagina para ponerles un estilo en el caso que los quiera
    });

    //despues podemos ver el rendimento de las tareas con forEach cambiando todo por un loop
    console.timeEnd('[id].js - forEach')

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
//no entiendo porque no puedo navegar a las paginas internas si el path tiene la ruta que necesito
//creo que pasa porque el response content que quiero pintar tiene elementos internos
  export async function getStaticProps({ params }) {
    let pagIds = await posts(params.id);
    let response = pagIds;
    return {
      props: {
        response,
      },
    };
  }

  

