import { useState , useEffect , useRef } from 'react';
import styles from '../styles/Header.module.css';
import Button from './button'


function Header(props) {
  let headerSize = 30;
  const header = useRef();
  const [dialogOpen , setDialogOpen] = useState(false);
  const [widWindow , setWidWindow] = useState(0)
  
  useEffect( () => {
    setWidWindow(window.screen.width);
    // @ts-ignore
    headerSize = header.current.clientHeight; // Este no cambia tendria que usar un estado? 🛑
    window.screen.width > 770 ? setDialogOpen(true) : false;
  })
  function handleClickOpen() {
    if(!dialogOpen) {
      setDialogOpen(true);
    }
  } 
  function handleClickClose() {
    if(dialogOpen) {
      setDialogOpen(false);
    }
  } 

  
  return (
    <dialog ref={header} onClick={handleClickOpen} open={dialogOpen} className={(props.scroll >= headerSize && widWindow > 770) ? styles.header_srll : styles.header}>
      { widWindow > 770 ? false : <div onClick={handleClickClose} className={styles.close}>x</div> }
      <Nav name={(props.scroll >= headerSize && widWindow > 770) ? styles.nav_srll : styles.nav}/>
    </dialog>
  );
}


function Nav(props) {
    return (
    <ul className={props.name}>
      <li>
        <Button href='/' className='button' text='Inicio'/>
      </li>
      <li>
        <Button href='/contact' className='button' text='Contact'/>
      </li>
      <li>
        <Button href='/posts' className='button' text='Mis Notas'/>
      </li>
      <li>
        <Button href='/about' className='button' text='About'/>
      </li>
      {/* <li>
        <Button href='/codeLab' className='button' text='Code Lab'/>
      </li> */}
    </ul>
    );
}

export default Header;