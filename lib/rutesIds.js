//PARA OBETENER TODAS LAS POSIBLES RUTAS DE NOTION
import { Client } from '@notionhq/client'

// const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function rutesIds() {
/*     let listIDs = [];

    const recursive = async (blockId) => {
        let resChildrens = await notion.blocks.children.list({block_id: blockId});
        for(let x=0 ; x < resChildrens.results.length ; x++) {
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
    let cosa = await recursive('5f28676954394485a6db3de0b592a862');
    let buenas = [];
    let estructurado = await listIDs.forEach(e=> buenas.push({params:{id:e}}))
    return buenas; */

  return [
    { params: { id: 'fcc50d15-3a08-43bd-a526-2d0329f53c89' } }, // 1
    { params: { id: 'ed38ff95-d0fa-45f8-8c1a-37a5401974cc' } }, // 1.1
    { params: { id: 'fdcdebed-c07d-4790-ab53-9f81db7ad144' } }, // 1.2
    { params: { id: '686717f4-4482-4940-9f62-a4ad1670bcd3' } }, // 1.3 ??? creo que es el vacio
    { params: { id: '193308d9-77ff-4032-9982-e1ab92eac883' } }, // 1.1.1
    { params: { id: '9bb36ae9-794b-4b25-9d5c-4b3eb710c261' } }, // 2
    { params: { id: '71088f32-a443-400d-8bff-586cc8425755' } }, // 2.1
    { params: { id: 'bf387acc-cab3-45a0-b1bf-38b9b20710f9' } }, // 3
    { params: { id: '44fde810-3af9-48bd-b53e-e8477e41529c' } }, // 3.1
    { params: { id: 'b2264d76-dd59-48ac-a74a-a415c59c0004' } }, // 3.2
  ];

};

export {rutesIds};