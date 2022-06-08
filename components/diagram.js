import React from 'react';
import styles from '../styles/Diagram.module.css'
import {imgs} from '../public/img/img';
import sheetDetails from '../src/server/get';
import Image from 'next/image';

/* let jsonDetails;
sheetDetails
.then(e=> jsonDetails = e)
.then(()=> console.log(sheetDetails)) */

class DiagramJ extends React.Component {
    constructor(props) {
        super(props);
        this.arrayByTitle = this.arrayByTitle.bind(this);
        this.state = {
            jsonDetails : [],
            completeDetailList: [<li>Cargando...</li>]
        }
        //this.props.title;
    }
    componentDidMount() {
        sheetDetails
        .then(e=> this.setState({jsonDetails : e}))
        .then(()=> {
                let arrByTitle = this.arrayByTitle();
                //let withListItem = arrByTitle.map(text => <li key={text}>{text}</li>);
                let withListItem = [];
                for(let text = 1 ; text < arrByTitle.length ; text++) {
                //for(let text in arrByTitle) {
                    withListItem.push(<li >{arrByTitle[text]}</li>);
                }
                this.setState({completeDetailList : withListItem});
            })
            //.then( ()=> {debugger})
    }
    //en base al valor de la prop title retorna el array que coincida en su primer elemento ([0]) con esta propiedad
    arrayByTitle() {
        for(let detail in this.state.jsonDetails) {
            if(this.props.title === this.state.jsonDetails[detail][0]) {
                return this.state.jsonDetails[detail];
            }
        }
        return [[] , 'Datos pendientes'];
    }

    render() {
        return (
            <ul>{this.state.completeDetailList}</ul>
        )
    }
}

function Diagram() {
    let titleDiagrams = []
    for(let img in imgs) {
        titleDiagrams.push(img);
    }
    function diagrams() {
        let completDiagrams = [];
        for(let diagram in titleDiagrams) {
            completDiagrams.push(
                <li key={titleDiagrams[diagram]} className={styles.diagram}>
                    <h3>{titleDiagrams[diagram]}</h3>
                    <DiagramJ title={titleDiagrams[diagram]}/>
                    {/* <img alt='' src={imgs[titleDiagrams[diagram]]}/>  */}
                    <div className={styles.imge}>
                        <Image /*className={styles.imge}*/ alt='' src={imgs[titleDiagrams[diagram]]} layout='fill'/>
                    </div> 
                </li>
            )
        }
        return completDiagrams;
    }
    
    return (
        <ul className={styles.diagramsContainer}>
            {diagrams()}
        </ul>
    )
}

export default Diagram;