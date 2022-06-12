import React from 'react';
import styles from '../styles/Diagram.module.css'
import {imgs} from '../public/img/img';
import Image from 'next/image';


function Diagram(props) {

    let titleDiagrams = []
    for(let img in imgs) {
        titleDiagrams.push(img);
    }

    function diagramJSON(title) {
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
                    {diagramJSON(titleDiagrams[diagram])}
                    <div className={styles.imge}>
                        <Image alt='' src={imgs[titleDiagrams[diagram]]} layout='fill'/>
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