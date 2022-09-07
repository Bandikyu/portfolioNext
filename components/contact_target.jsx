import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ContactTarget(props) {
  const [stateStyle, setStateStyle] = useState(styles.targetContact);
  const [submit, setSubmit] = useState("Enviar");

  function handleClick() {
    if (props.mail && stateStyle === styles.targetContact) {
      setStateStyle(styles.targetContactExpanded);
    } else {
      setStateStyle(styles.targetContact);
    }
  }
  function submitHandler(event) {
    event.preventDefault();
    setSubmit("Enviando...");

    let email = event.target.email.value;
    let message = event.target.message.value;
    let date = new Date().toLocaleDateString("es-es", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    fetch("/api/sheetsApi", {
      method: "POST",
      body: JSON.stringify({ date, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      event.target.reset();
      setSubmit("Enviado ✓");
      setTimeout(() => {
        setStateStyle(styles.targetContact);
        setSubmit("Enviar");
      }, 2500);
    })
    .catch(() => {
      setSubmit("Fallo en el Envio");
      setTimeout(() => {
        setSubmit("Reintentar");
      }, 1500);
    });
  }

  return (
    <div className={stateStyle}>
      <h2>{props.title}</h2>
      {props.mail ? (
        <form onSubmit={submitHandler} id="form" className={styles.form}>
          <input onClick={handleClick} value="✖" type="button" />
          <input
            required
            placeholder="Ingrese su Email"
            type="mail"
            id="email"
            name="email"
          />
          <textarea
            required
            placeholder="Mensaje..."
            id="message"
            name="message"
          ></textarea>
          <input id="submit" value={submit} type="submit" />
        </form>
      ) : (
        false
      )}
      <div className={styles.tgContactImg}>
        <Image alt={props.title} src={props.img} layout="fill" />
      </div>
      {props.mail ?
        <aside className={styles.curtain} onClick={handleClick} ></aside> : 
        <a className={styles.curtain} href={props.url} target="_blank"></a> 
      }
    </div>
  );
}
