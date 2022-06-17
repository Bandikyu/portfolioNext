import styles from '../../styles/Notas.module.css';
import Title from '../../components/title';
import Content from '../../components/content';
import Header from '../../components/header';
import { createBlocks } from '../../lib/generateBlocks';
import {posts} from '../../lib/posts'
import {rutesIds} from '../../lib/rutesIds'

// export let imgUrls = ["geekland.eu"];//🤠


export default function Post({ response }) {

    let bloques = createBlocks(response);
/*     async function cosa() {
      process.env.IMG_URL = await JSON.stringify(["geekland.eu"]);
      let jsonParse = await JSON.parse(process.env.IMG_URL);
      console.log(jsonParse);
    };
    cosa(); */
    
/*     console.log(process.env.IMG_URL.split(','));
    console.log(': %j' , process.env.IMG_URL); */
/*     console.time('imageURLs');
    (() => {
      //considerar que esto es para imges externas
      let imgsUrls = [];
      response.resChildrens.results.forEach(e => {
        if (e.type === 'image') {
          // console.log(e[e.type])
          let url = e[e.type][e[e.type].type].url;
          let cleanUrl = url.match(/\/\/(.*?)\//)[1];
          imgsUrls.push(cleanUrl);
          // console.log(url.slice(url.indexOf('://')+3));
          console.log(typeof cleanUrl);
        }
      });
    })();
    console.timeEnd('imageURLs'); */

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

  

