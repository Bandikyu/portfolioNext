import React from 'react';
import './front.css';

function Front(props) {
    console.log(props.border);
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
                <p>
                    Este es mi portafolio online, en el podra encontrar
                    informacion que le pueda interesar sobre TIC y sobre mi:
                    <ul>
                        <li>"Contact", dispondra de distintas formas de comunicarse conmigo</li>
                        <li>"Blog" donde interiorizo algunos temas de interes desde la parte teorica</li>
                        <li>
                            "Proyectos e Ideas" aca presento algunos mini proyectos e ideas
                            para el futuro que considero interesantes
                        </li>
                    </ul>
                </p>
                {/* <p>En este ejemplo, creamos una lista de 
                tareas simple usando pseudo-elementos. Este método 
                puede ser usado comúnmente para añadir detalles a la 
                interfaz y mejorar su experiencia de usuario.</p> */}
            </div>
            
        </section>
    )
    
}


export default Front;