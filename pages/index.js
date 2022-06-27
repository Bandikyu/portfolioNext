import React from 'react';
import Content from '../components/content';
import Front from '../components/front';
import Header from '../components/header';
import Diagram from '../components/diagram';
import sheetDetails from '../src/sheets/get';

export async function getStaticProps() {
/*   const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=MqHeXwqHVyI3DL9Ps5hjrAJC8a60etFDLsaztbSyAzHkLfiOyVLzIoRoqVIt822CgGNtQ6RXqqrsJz3hBeLWMk4qPFXPoOogm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDsMcJx9e6kGqetilaE8F1WkAYHfzPNw5KBLahzd7DgGDE-gQD6pr-_I5URgSZwxfaFLLC4pk8aiOQrZZUxpPc_ZwJH_ZWGVmw&lib=MiUkTyRDBd8KElwlE7hND95Tfj4_1MZ2S');
  const posts = await res.json(); */
  const posts = await sheetDetails();
  // console.log(posts);
  return {
      props: {
          posts,
      },
      revalidate: 10,
  }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.throttle = this.throttle.bind(this);
        this.coordY = this.coordY.bind(this);
        //this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.state = {
          //scroll: window.scrollY //esto podria generarlo en pre render static
        };
        this.throttleTimer = false;
        this.posts = props.posts;
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

    componentDidMount() {
      this.numero = Math.round(50/this.state.scroll+2);
      window.addEventListener('scroll' , ()=>this.throttle(this.coordY , 300));
    }
/*ARREGLOS: Mi gran problema aca es que scrolleando cambio el estado del componente principal
por ende renderizo a los hijos (TODO en resumen) con cada scrolleo, mientras mas grande sea el proyecto este problema va a ser mayor
tengo que buscar una manera de que pueda saber y utilizar el estado del scrolleo para usarlo en todos los hijos sin renderizalors a los que
no tienen nada que ver con esto 🥐*/
    render() {
        return (
          <div style={{
            position: 'relative',
          }} 
          className='Princial'>
            <Front border={this.state.scroll}/>
            <Header scroll={this.state.scroll}/>
            <section style={{width:'80%', margin: '0 auto'}}>
              <Content>
                <Diagram jsonDiagram={this.posts}/>
              </Content>
            </section>
          </div>
        );
    }
}

export default App;