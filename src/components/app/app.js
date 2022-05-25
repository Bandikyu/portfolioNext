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
        };
        this.throttleTimer = false;
    }

    coordY() {
      if(this.throttleTimer === true) {
        return this.setState({scroll: window.scrollY}) 
      }else return;
    };
    throttle (callback, time) {
      if (this.throttleTimer) return;
      
      this.throttleTimer = true;
      
      setTimeout(() => {
          callback();
          this.throttleTimer = false;
      }, time);
    }

    render() {
        window.addEventListener('scroll' , ()=>this.throttle(this.coordY , 300));
        
        return (
          <div className='Princial'>
            <Front/>
            <Header scroll={this.state.scroll}/>
          </div>
        );
    }
}

export default App;