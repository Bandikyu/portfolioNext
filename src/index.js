import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import './components/header/header.css';
//import './components/button/button.css';
//import './components/front/front.css';

import Front from './components/front/front';
import Header from './components/header/header';
//import Load from './components/load/load';





//Content============================
class Content extends React.Component {
  render() {
    return <div className='content'>Soy el contenedor princial</div>
  }
}



  
  
  class Root extends React.Component {
    render() {
      return (
        <div className='Princial'>
          <Front/>
          <Header/>
          <Content/>

        </div>
      );
    }
  }




  

  
  // ========================================
  
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  );

  