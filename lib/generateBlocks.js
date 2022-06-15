import Link from 'next/link';
import Title from '../components/title';
import styles from '../styles/Notas.module.css';
// import Image from 'next/image';
// export let imgUrls = ["geekland.eu"];🤠

export function createBlocks(response) {
    let bloques = [];
    let otherBlocks = [];
      
    response.resChildrens.results.forEach(e => {
        /* Imagenes tengo mucho para hacerle */
              /*else if(e.type === 'image') {
          bloques.push(
            <Image key={e[e.type].external.url} alt='' src={e[e.type].external.url} width={200} height={200}/>
          )
        } */ //🤠 buscar una forma de exportar las url de las imagenes a next.config.js antes de exportar el modulo alla
        /* Block Pagina */
        if(e.type === 'child_page') {
          bloques.push(
            <Link key={e.id} href={`${e.id}`}>
              <a className={styles[e.type]}>{e[e.type].title}</a>
            </Link>
            );
        }
        /* Parrafos */
        else if(e.type === 'paragraph'){
          let paragraph = '';
          e[e.type].rich_text.forEach(p => 
            paragraph = paragraph.concat(p.plain_text)
          );
          bloques.push(
            <p key={bloques.length} className={styles[e.type]}>{paragraph}</p>
          );
        }
        /* Titulos */
        else if(e.type.match(/heading_[1-3]/)) {
          let paragraph = '';
          e[e.type].rich_text.forEach(p => 
            paragraph = paragraph.concat(p.plain_text)
          );
          bloques.push(
            <Title lvl={Number(e.type.slice(-1))} key={bloques.length}>{paragraph}</Title>
          );
        }
        /* Citas */
        else if(e.type === 'quote') {
          const backColor = e[e.type].color.slice(0 , e[e.type].color.indexOf('_'));
  
          let paragraph = '';
          e[e.type].rich_text.forEach(p => 
            paragraph = paragraph.concat(p.plain_text)
          );
          bloques.push(
            <blockquote style={{backgroundColor: backColor !== 'defaul' ? backColor : 'gray'}} key={bloques.length} className={styles[e.type]}>
              <span className={styles.text}>{paragraph}</span>
            </blockquote>
          );
        }
        /* Callouts */
        else if(e.type === 'callout') {
          const backColor = e[e.type].color.slice(0 , e[e.type].color.indexOf('_'));
  
          let paragraph = '';
          e[e.type].rich_text.forEach(p => 
            paragraph = paragraph.concat(p.plain_text)
          );
          bloques.push(
            <aside style={{backgroundColor: backColor !== 'defaul' ? backColor : 'gray'}} key={bloques.length} className={styles[e.type]}>
              <span className={styles.icon}>{e[e.type].icon.emoji}</span>
              <span className={styles.text}>{paragraph}</span>
            </aside>
          );
        }
        /* Codigo */
        else if(e.type === 'code') {
          const codeBlocks = e[e.type].rich_text;
          for(let x = 0 ; x<codeBlocks.length ; x++) {
            bloques.push(<div key={bloques.length} style={{border: '1px solid' , margin: '30px 20px'}}>{codeBlocks[x].plain_text}</div>);
            console.log(e[e.type].rich_text[x].plain_text);
          }
        }
        /* Los que sobran */
        else otherBlocks.push(e); //aca puedo ver los bloques que no entran a la pagina para ponerles un estilo en el caso que los quiera
        
      });
      return bloques;
  }