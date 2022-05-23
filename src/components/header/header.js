import React from 'react';
import './header.css';
import Button from '../button/button'


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {      
      return (
        <div id='header' className={this.props.scroll>=100 ? 'header header-srll' : 'header'}>
          <Nav name={this.props.scroll>=100 ? 'nav nav-srll' : 'nav'}/>
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