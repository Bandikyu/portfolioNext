import {rutesIds} from '../lib/rutesIds'

export default function pagina({rutas}) {
    console.log(rutas);
    return (
        <div>Buenas</div>
    )
}

export async function getStaticProps() {
    let rutas = await rutesIds();
    return {
        props: {
            rutas
        }
    }
}


/* async function callNotionApi() {
    callNotionApiVar = await rutesIds();
    return callNotionApiVar
}; */
/* //esto lo hago para crear un endpoint con la apinext, y almacenar aca las ids de notion
//para las poteriores consultas que necesite hacer
export default async function handler(req, res) {
    if(!!callNotionApiVar){
        try {
            const result = callNotionApiVar;
            console.log('api 1 respuesta: %j' , result);
            res.status(200);
          res.json({ result });
        } catch (err) {
          res.status(500).json({ error: 'failed to load data' })
        }
    } else {
        try {
            const result = await callNotionApi();
            console.log('api 2 respuesta: %j' , result);
            res.status(200);
          res.json({ result });
        } catch (err) {
          res.status(500).json({ error: 'failed to load data' })
        }
    }
} */
  