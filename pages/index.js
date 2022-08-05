import Front from '../components/front';
import Title from '../components/title';
import Header from '../components/header';
import Diagram from '../components/diagram';
import Content from '../components/content';
import Footer from '../components/footer';
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
    }} 
    className='principal'>
      <Front border={scroll}>
        <div>
          <h1>Hola soy Bruno, un gusto!!!</h1>
          <div>
              Este es mi portafolio en desarrollo online, espero que puedas encontrar informacion interesante sobre TIC y/o sobre mi.
          </div>
        </div>
      </Front>
      <Header scroll={scroll}/>
      <section className='tecSubContainer'>
        {/* <h1 style={{margin:'30px 0 -20px', textAlign: 'center' , fontSize:'1.4rem' , lineHeight:'1.5rem'}}>Lenguajes y tecnologías que he usado</h1> */}
        <Title lvl={2}>Lenguajes y tecnologías que he usado</Title>
        <Content>
          <Diagram jsonDiagram={posts}/>
        </Content>
      </section>
      <Footer/>
    </div>
  );

}

export default App;