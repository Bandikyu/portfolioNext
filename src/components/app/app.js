import React from 'react';

import '../../index.css';

import Front from '../front/front';
import Header from '../header/header';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.throttle = this.throttle.bind(this);
        this.coordY = this.coordY.bind(this);
        this.state = {
          scroll: window.scrollY 
          //throttleTimer: false,
          //loaded: false
        };
        this.throttleTimer = false;

    }
/*     componentDidMount = () => {
      this.setState({loaded: true});
    } */
    coordY() {
      //if(this.state.throttleTimer === true) {
      if(this.throttleTimer === true) {
        return this.setState({scroll: window.scrollY}) 
      }else return;
    };
    throttle (callback, time) {
      if (this.throttleTimer) return;
      //if (this.state.throttleTimer) return;
      
      this.throttleTimer = true;
      //this.setState({throttleTimer: true})
      
      setTimeout(() => {
          callback();
          this.throttleTimer = false;
          //this.setState({throttleTimer: false});
      }, time);
    }

    render() {
        window.addEventListener('scroll' , ()=>this.throttle(this.coordY , 300));
        //console.log(this.throttleTimer)
        
        return (
          <div className='Princial'>
            <Front/>
            <Header scroll={this.state.scroll}/>
          </div>
        );
    }
}

export default App;