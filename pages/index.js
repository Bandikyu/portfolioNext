import Front from "../components/front";
import Title from "../components/title";
import Header from "../components/header";
import Diagram from "../components/diagram";
import Content from "../components/content";
import Footer from "../components/footer";
import sheetDetails from "../src/sheets/get";
import useScroll from "../hooks/scroll";
import HeadTags from "../components/headTags";

export async function getStaticProps() {
  const posts = await sheetDetails();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

function App(props) {
  let posts = props.posts;
  let scroll = useScroll();

  let descripcion = "Esto es un portafolio en desarrollo online, espero que puedasencontrar informacion util sobre TIC y/o sobre mi."

  return (
    <div
      style={{
        position: "relative",
      }}
      className="principal"
    >
      <HeadTags title="Mi Portafolio" description={descripcion}/>
      <Front border={scroll}>
        <div>
          <h1>Saludos, me llamo Bruno</h1>
          <div>
            {descripcion}
          </div>
        </div>
      </Front>
      <Header scroll={scroll} />
      <section className="tecSubContainer">
        <Title lvl={2}>Lenguajes y tecnologías que he usado</Title>
        <Content>
          <Diagram jsonDiagram={posts} />
        </Content>
      </section>
      <Footer />
    </div>
  );
}

export default App;
