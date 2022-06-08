import React from 'react';
//import Button from '../button/button';
import Diagram from './diagram';
import styles from '../styles/Content.module.css';

//function Content(props) 
class Content extends React.Component{
    /* componentDidMount() {
        console.log('compDidMount render for app stats change, psss NOPE') //🥐
    } */

    render() {
        //console.log('Content: me re-renderizan loco'); //🥐
        
        return (
            <div className={styles.content}> 
                <h2>Algunas de las tecnologias con las que trabajo</h2>
                <Diagram/>
            </div>
        )
    }
}

export default Content;