import Link from 'next/link';
import Title from '../components/title';
import styles from '../styles/Notas.module.css';
import Image from 'next/image';
// export let imgUrls = ["geekland.eu"];🤠
import ReactPlayer from 'react-player';

export function createBlocks(response , iconos) {
    let bloques = [];
    let otherBlocks = [];
    response.resChildrens.results.forEach(e => {
        /* Bloque de Pagina */
        if(e.type === 'child_page') {
          let icono;
          if(!!iconos) {
            iconos.forEach(i => i.id === e.id ? icono = i.icon : false)
          }
          bloques.push(
            <div key={bloques.length} className={styles.link}>
              <Link key={e.id} href={`${e.id}`}>
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
        /* Imagenes */
        else if(e.type === 'image') {
          let url = e[e.type][e[e.type].type].url;
          let cleanUrl = url.match(/\/\/(.*?)\//)[1];
          if (process.env.DOMAINS_NEXT_CONFIG.includes(cleanUrl)) {
            bloques.push(
              <div key={bloques.length} className={styles.componentImage}>
                <div>
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
            <div key={e[e.type].external.url} className={styles.lessComponentImage}>
              <img
                alt='nada'
                src={e[e.type].external.url}
              />
              <span style={{fontSize:'.7rem'}}>image by {cleanUrl}</span>
            </div>)
          }
        }
        /* Video */
        else if(e.type === 'video') {
          let url = e[e.type].external.url;
          let platform = url.match(/:\/\/(.*)\//)[1];
          bloques.push(
            <div key={bloques.length} className={styles.viwPortVideo}>
              <a target='_blank' href={e[e.type].external.url}>En: <br/>{platform}</a>
              <ReactPlayer width={'100%'} height={'100%'}controls={true} url={url}/>
            </div>
          )
        }
        /* List */
        else if(e.type.match(/_list_item/)) {
          let tatos = e[e.type];
          bloques.push(
            <div key={bloques.length} className={styles.list}>▸ {tatos.rich_text[0].plain_text}</div>
          )
        }
        /* Toggle */ //PENDIENTE
        /*         else if(e.type === 'toggle') {
          console.log(e);
          let tatos = e[e.type];
          console.log(tatos.rich_text[0]);
          bloques.push(
          )
        } */
        /* Los que sobran */
        else otherBlocks.push(e.type); //aca puedo ver los bloques que no entran a la pagina para ponerles un estilo en el caso que los quiera
      });
      // console.log(otherBlocks);
      return bloques;
  }
