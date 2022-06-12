import Link from 'next/link';
import {posts , postsIds} from '../../lib/posts'


export default function Post({ response }) {
    // console.log(response.results);
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
    const paths = await postsIds();
    // console.log(paths);
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) {
    let response = await posts(params.id);
    return {
      props: {
        response,
      },
    };
  }
