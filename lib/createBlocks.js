import Link from 'next/link';
import Title from '../components/title';
import styles from '../styles/Notas.module.css';
import Image from 'next/image';
import {icons} from './icons'
// export let imgUrls = ["geekland.eu"];🤠

export function createBlocks(response) {
    let bloques = [];
    let otherBlocks = [];
    response.resChildrens.results.forEach(e => {
        /* Block Pagina */
        if(e.type === 'child_page') {
          console.log(e);
          bloques.push(
            <div className={styles.link}>
              {/* <span>{iconos[1].icon}</span> */}
              <Link key={e.id} href={`${e.id}`}>
                <a className={styles[e.type]}>{e[e.type].title}</a>
                {/* <a className={styles[e.type]}>{e.properties.title.title[0].plain_text}</a> */}
              </Link>
            </div>
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
            bloques.push(
              <div key={bloques.length} className={styles.containerCode}>
                <pre className= {styles.textCode}>{codeBlocks[x].plain_text}</pre>
              </div>
              );
          }
        }
        /* Imagenes tengo mucho para hacerle */
        else if(e.type === 'image') {
          let url = e[e.type][e[e.type].type].url;
          let cleanUrl = url.match(/\/\/(.*?)\//)[1];
          if (process.env.DOMAINS_NEXT_CONFIG.includes(cleanUrl)) {
            bloques.push(
              <div key={bloques.length} style = {{margin:'20px auto', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div style = {{position:'relative', height:'300px', width:'80%'}}>
                  <Image
                    alt=''
                    src={e[e.type].external.url}
                    objectFit='contain'
                    layout='fill'
                  />
                </div>
                <span style={{fontSize:'.7rem'}}>image by {cleanUrl}</span>
              </div>
            )
          } 
          else {
            bloques.push(
            <div key={e[e.type].external.url} style = {{width:'80%', margin:'20px auto', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <img
                style={{objectFit:'contain' , width: '100%', height:'300px' }}
                alt='nada'
                src={e[e.type].external.url}
              />
              <span style={{fontSize:'.7rem'}}>image by {cleanUrl}</span>
            </div>)
          }
        } //🤠 buscar una forma de exportar las url de las imagenes a next.config.js antes de exportar el modulo alla
        // Los que sobran
        else otherBlocks.push(e.type); //aca puedo ver los bloques que no entran a la pagina para ponerles un estilo en el caso que los quiera
      });
      // console.log("in generateBlocks.js " + otherBlocks);
      return bloques;
  }
