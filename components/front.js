import styles from "../styles/Front.module.css";

function Front(props) {
  return (
    <section
      style={
        props.border > 150
          ? {
              borderBottomLeftRadius: `${200 / (props.border + 1)}px ${
                100 / (props.border + 1)
              }px`,
              borderBottomRightRadius: `${200 / (props.border + 1)}px ${
                100 / (props.border + 1)
              }px`,
            }
          : { border: "" }
      }
      className={styles.front}
    >
      <div className={styles.icon}>
        <p>Bruno R{props.children.h1}</p>
      </div>
      {props.children}
    </section>
  );
}

export default Front;
