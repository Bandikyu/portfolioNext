import React from 'react';
// import '../styles/index.css';
//import Content from '../components/content';
import {posts} from '../../lib/posts'
import Link from 'next/link';


/* export async function getServerSideProps() {
  // Get the posts
  let response = await posts();
  // Return the result
  console.log(posts);
  return {
    props: {
      posts: results
    }
  }
} */
export async function getStaticProps() {
  let response = await posts('5f28676954394485a6db3de0b592a862');
  // console.log(response);
  return {
    props: {
      posts: response.resChildrens,
    }
  };
}

function Pru(props) {
  let titulos = [];
 props.posts.results.forEach(e => {
    titulos.push(
      <Link key={e.id} href={`posts/${e.id}`}>
        <a>{e[e.type].title}</a>
      </Link>
      );
  });
        return (
          <div>
            <div>buenas </div>
            <div>{titulos}</div>
          </div>
        );
    
}

export default Pru;