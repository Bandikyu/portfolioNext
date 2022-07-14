import Content from '../components/content';
import Front from '../components/front';
import Header from '../components/header';
import Diagram from '../components/diagram';
import sheetDetails from '../src/sheets/get';
import useScroll from '../hooks/scroll'

export async function getStaticProps() {
  const posts = await sheetDetails();
  return {
      props: {
          posts,
      },
      revalidate: 10,
  }
}

function App(props) {
  let posts = props.posts
  let scroll = useScroll();

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
    }} 
    className='principal'>
      <Front border={scroll}/>
      <Header scroll={scroll}/>
      <section className='tecSubContainer'>
        <Content>
          <Diagram jsonDiagram={posts}/>
        </Content>
      </section>
    </div>
  );

}

export default App;