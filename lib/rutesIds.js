//PARA OBETENER TODAS LAS POSIBLES RUTAS DE NOTION
import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY });


const rutesIds = async () => {

    let listIDs = [];

    const recursive = async (blockId) => {
        let resChildrens = await notion.blocks.children.list({block_id: blockId});
        for(let x=0 ; x < resChildrens.results.length ; x++) {
            // @ts-ignore
            if(resChildrens.results[x].type === 'child_page') {
                listIDs.push(resChildrens.results[x].id);
                let cosas = await recursive(resChildrens.results[x].id);
            }
        }

    }
    // function recursive(blockId) {
    //no es lo mas bonito del mundo, y hago mil peticiones a la api, espero no me llamen quejandose xD
    //ahora que ta logrado queda pulir el codigo y buscar una forma de utilizar menos peticiones a la api x.x
    //igual una vez se creen las paginas estaticas no va a importar porque la peticion a las paginas va a ser solo 1 vez
    //paso siguiente: crear el estilo para cada tipo de bloque para cuando los pinte en pantalla cuando los traiga con posts()
    let cosa = await recursive(process.env.ID_BASE_PAGE);
    return listIDs;
    

};

export {rutesIds};