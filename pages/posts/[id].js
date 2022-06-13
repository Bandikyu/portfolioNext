import Link from 'next/link';
import {posts} from '../../lib/posts'
import {rutesIds} from '../../lib/rutesIds'


export default function Post({ response }) {
    // console.log(response);
    let titulos = [];
    response.results.forEach(e => {
    titulos.push(
      <Link key={e.id} href={`${e.id}`} >
        <a>{e[e.type].title}</a>
      </Link>
      );
  });
    return (
      <div>
        <div>buenas </div>
        <ul>{titulos}</ul>
      </div>
    );
}

export async function getStaticPaths() {
    const resp = await rutesIds();
    const paths = resp;
    console.log('paths : %j', paths);
    // console.log(paths);
    return {
      paths,
      fallback: false,
    };
  }

/* export async function getStaticProps({ params }) {
    let response = await rutesIds(params.id);
    console.log(params);
    return {
      props: {
        response,
      },
    };
  } */
  export async function getStaticProps({ params }) {
    let pagIds = await posts(params.id);
    let response = pagIds.resChildrens;
    return {
      props: {
        response,
      },
    };
  }

  
/* 
export default function Post({ response }) {
    // console.log(response);
    let titulos = [];
    response.results.forEach(e => {
    titulos.push(
      <Link key={e.id} href={`${e.id}`} >
        <a>{e[e.type].title}</a>
      </Link>
      );
  });
    return (
      <div>
        <div>buenas </div>
        <ul>{titulos}</ul>
      </div>
    );
}

export async function getStaticPaths() {
    const resp = await posts('5f28676954394485a6db3de0b592a862');
    const paths = resp.listIDs;
    const resContainer = resp.resContainer;
    console.log('resContainer : %j', resContainer.id);
    console.log('paths : %j', paths);
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) {
    let pagIds = await posts(params.id);
    let response = pagIds.resChildrens
    return {
      props: {
        response,
      },
    };
  } */
