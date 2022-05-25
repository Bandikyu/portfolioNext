import React from 'react';
import './header.css';
import Button from '../button/button'


class Header extends React.Component {
  constructor(props) {
    super(props);
    //this.componentDidMount = this.componentDidMount.bind(this);
/*     this.state = {
      headerSize: this.componentDidMount
    } */
  }
  //queriendo pasar el tamaño del componente despues de ser inicializado en el arbol  a un estado y en base a esto poder 
  //enviarlo como valor a la clase en lugar de los 200
/*   componentDidMount() {
    let header = document.getElementById('header');
    //let headerSize = header.clientHeight
    return header.clientHeight;
  } */
  
  render() {      
      console.log(this.props.scroll);
      return (
        <div id='header' className={this.props.scroll>=200 ? 'header header-srll' : 'header'}>
          <Nav name={this.props.scroll>=200 ? 'nav nav-srll' : 'nav'}/>
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
        <Button href='https://sass-lang.com/guide' className='button' text='Blogs'/>
      </li>
      <li>
        <Button href='https://sass-lang.com/guide' className='button' text='Contact'/>
      </li>
      <li>
        <Button href='https://sass-lang.com/guide' className='button' text='Proyectos e Ideas'/>
      </li>
    </ul>
    );
}

export default Header;