import React from 'react';
import './header.css';
import Button from '../button/button'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.throttle = this.throttle.bind(this);
    this.coordY = this.coordY.bind(this);
    this.state = {/* classHead: 'header' , classNav: 'nav', */ scroll: window.scrollY , throttleTimer: false};
  }
  coordY() {
    if(this.state.throttleTimer === true) {
      return this.setState({scroll: window.scrollY}) 
    }else return;
  };
 
  throttle (callback, time) {
    //don't run the function while throttle timer is true
    if (this.state.throttleTimer) return;
    
    //first set throttle timer to true so the function doesn't run
    //this.state.throttleTimer = true;
    this.setState({throttleTimer: true})
    
    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        callback();
        this.setState({throttleTimer: false});
        //console.log(this.state.scroll)
        //this.state.throttleTimer = false;
    }, time);
  }
  
  render() {
    /*       setTimeout(() =>(
      window.scrollY<100 ? 
      this.setState({classHead:'header' , classNav:'nav'})  : 
      this.setState({classHead:'header header-srll' , classNav:'nav nav-srll'})
      ) , 300) */
      window.addEventListener('scroll' , ()=>this.throttle(this.coordY , 300));
      
      
      return (
        
        //<div id='header' className={this.state.classHead}>
        <div id='header' className={this.state.scroll>=100 ? 'header header-srll' : 'header'}>
          {/* <Nav name={this.state.ClassNav}/> */}
          <Nav name={this.state.scroll>=100 ? 'nav nav-srll' : 'nav'}/>
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