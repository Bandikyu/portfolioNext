import React from 'react';
import styles from '../styles/Header.module.css';
import Button from './button'



class Header extends React.Component {
  constructor(props) {
    super(props);
    //ARREGLOS: tengo que buscar una manera de que cuando F5 a la pagina, this.headerSize no vuelva a cambiar
    //porque el scroll se mantiene, entonces los size de algunos elementos cambia.
    //solucion torpe: que cada vez que actualice la pagina vuelva al top 🐜
    this.headerSize = 20;
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    let header = document.getElementById('header');
    this.headerSize = header.clientHeight;
    //console.log(this.headerSize); //🐜  
  }
/*   componentWillUnmount() {
    this.headerSize = 100;
    console.log(this.headerSize); //🐜  
  } */

  handleClick(e) {
    //console.log(e.target);
  }
  render() {    
      return (
        <div id='header' className={this.props.scroll>=this.headerSize ? styles.header_srll : styles.header}>
          <Nav name={this.props.scroll>=this.headerSize ? styles.nav_srll : styles.nav}/>
        </div>
      );
    }
}

function Nav(props) {
    return (
    <ul className={props.name}>
      <li>
        <Button href='https://sass-lang.com/guide' className='button' text='Inicio'/>
      </li>
      <li>
        <Button href='https://sass-lang.com/guide' className='button' text='Contact'/>
      </li>
      <li>
        <Button href='https://sass-lang.com/guide' className='button' text='Blogs'/>
      </li>
      <li>
        <Button href='https://sass-lang.com/guide' className='button' text='Code Lab'/>
      </li>
    </ul>
    );
}

export default Header;