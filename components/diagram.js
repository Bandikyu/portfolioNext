import styles from "../styles/Diagram.module.css";
import Image from "next/image";

function Diagram(props) {
  let completDiagram = [];
  for (let x = 0; x < props.jsonDiagram.length; x++) {
    let title;
    let img;
    let list = [];
    for (let y = 0; y < props.jsonDiagram[x].length; y++) {
      if (y === 0) {
        title = props.jsonDiagram[x][y];
      } else if (
        y === 1 &&
        props.jsonDiagram[x][y].match(/db3pap006files.storage.live.com/)
      ) {
        img = (
          <div className={styles.imge}>
            <Image
              alt=""
              src={"https://" + props.jsonDiagram[x][y]}
              layout="fill"
            />
          </div>
        );
      } else if (y > 1) {
        list.push(
          <li key={props.jsonDiagram[x][y]}>{props.jsonDiagram[x][y]}</li>
        );
      }
    }
    completDiagram.push(
      <li key={title} className={styles.diagram}>
        {<h3>{title}</h3>}
        {img}
        {<ul>{list}</ul>}
      </li>
    );
  }
  return <ul className={styles.diagramsContainer}>{completDiagram}</ul>;
}

export default Diagram;
