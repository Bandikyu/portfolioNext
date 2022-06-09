import React from 'react';
import styles from '../styles/Diagram.module.css'
import {imgs} from '../public/img/img';
// import sheetDetails from '../src/server/get';
import Image from 'next/image';

/* let jsonDetails;
sheetDetails
.then(e=> jsonDetails = e)
.then(()=> console.log(sheetDetails)) */

/* export function Probando({ posts }) {
    console.log(posts);
    return (
        <div>{posts}</div>
    )
} */

/* class DiagramJ extends React.Component {
    constructor(props) {
        super(props);
        this.arrayByTitle = this.arrayByTitle.bind(this);
        this.state = {
            jsonDetails : [],
            completeDetailList: [<li>Cargando...</li>]
        }
        this.props.title;
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
} */


function Diagram(props) {

    let titleDiagrams = []
    for(let img in imgs) {
        titleDiagrams.push(img);
    }

    function diagramJ(title) {
        let jsonDetails = props.jsonDiagram;
        let arrByTitle = arrayByTitle();
        let withListItem = [];

        for(let text = 1 ; text < arrByTitle.length ; text++) {
                withListItem.push(<li key={arrByTitle[text]}>{arrByTitle[text]}</li>);
            }

        function arrayByTitle() {
            for(let detail in jsonDetails) {
                if(title === jsonDetails[detail][0]) {
                    return jsonDetails[detail];
                }
            }
            return ['Datos pendientes'];
        }
        return (
            <ul>{withListItem}</ul>
        )
    }

    function diagrams() {
        let completDiagrams = [];
        for(let diagram in titleDiagrams) {
            completDiagrams.push(
                <li key={titleDiagrams[diagram]} className={styles.diagram}>
                    <h3>{titleDiagrams[diagram]}</h3>
                    {/* <DiagramJ title={titleDiagrams[diagram]}/> */}
                    {diagramJ(titleDiagrams[diagram])}
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