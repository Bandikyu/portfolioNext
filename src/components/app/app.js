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
          scroll: window.scrollY , 
          throttleTimer: false,
          loaded: false
        };
    }
/*     componentDidMount = () => {
      this.setState({loaded: true});
    } */
    coordY() {
      if(this.state.throttleTimer === true) {
        return this.setState({scroll: window.scrollY}) 
      }else return;
    };
    
    throttle (callback, time) {
      if (this.state.throttleTimer) return;
      
      this.setState({throttleTimer: true})
      
      setTimeout(() => {
          callback();
          this.setState({throttleTimer: false});
      }, time);
    }

    render() {
        window.addEventListener('scroll' , ()=>this.throttle(this.coordY , 300));
        //console.log(this.state)
        
        return (
          <div className='Princial'>
            <Front/>
            <Header scroll={this.state.scroll}/>
          </div>
        );
    }
}

export default App;