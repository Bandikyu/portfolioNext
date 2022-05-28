import React from 'react';
import Button from '../button/button';
import Diagram from '../diagram/diagram';
import './content.css';

//function Content(props) 
class Content extends React.Component{
    componentDidMount() {
        console.log('compDidMount render for app stats change, psss NOPE') //🥐
    }

    render() {
        console.log('Content: me re-renderizan loco'); //🥐
        
        return (
            <div className='content'> 
                <p>Buenas soy el content</p> 
                <Diagram/>
                <Button className="button" text="Soy Un Nuevo Boton"/>
            </div>
        )
    }
}

export default Content;