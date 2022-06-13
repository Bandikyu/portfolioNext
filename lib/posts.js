//PARA OBTENER LOS DATOS DE LA PAGINA
import { Client } from '@notionhq/client'
const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function posts(blockId) {
  // const blockId = blockId;
  const resContainer = await notion.blocks.retrieve({block_id: blockId});
  const resChildrens = await notion.blocks.children.list({block_id: blockId});
    //return {resContainer , resChildrens};
  return {resChildrens , resContainer};

};

export {posts};