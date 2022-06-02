import React from 'react';
import './front.css';

function Front(props) {
    return (
        <section
        style={props.border>150 ? {
            borderBottomLeftRadius: `${200/(props.border+1)}px ${100/(props.border+1)}px` ,
            borderBottomRightRadius: `${200/(props.border+1)}px ${100/(props.border+1)}px`
        } : {border: ''}}
        className='front'>
            <div>
                {/* Aca quiero que el titulo cambie segun la "pagina" en la que este, "Blog", "Contact"... */}
                <h1>Hola soy Bruno, un gusto</h1>
                <div>
                    Este es mi portafolio en desarrollo online, espero pueda encontrar informacion interesante sobre TIC y/o sobre mi:
                    <ul>
                        <li>Contact, dispondra de distintas formas de comunicarse conmigo</li>
                        <li>Blog, sera donde interiorizare sobre algunos temas de interes desde la parte teorica</li>
                        <li>
                            Code Lab, presentare algunos mini proyectos e ideas
                            para el futuro que considero interesantes
                        </li>
                    </ul>
                </div>
                {/* <p>En este ejemplo, creamos una lista de 
                tareas simple usando pseudo-elementos. Este método 
                puede ser usado comúnmente para añadir detalles a la 
                interfaz y mejorar su experiencia de usuario.</p> */}
            </div>
            
        </section>
    )
    
}


export default Front;