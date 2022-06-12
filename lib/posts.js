import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY });
let blockId;
async function posts(blockId = '5f28676954394485a6db3de0b592a862') {

  //const blockId = '5f28676954394485a6db3de0b592a862';
  //const resContainer = await notion.blocks.retrieve({block_id: blockId});
  const resChildrens = await notion.blocks.children.list({block_id: blockId});

  console.log('posts: ' + blockId);
//   console.log(resChildrens);
    //return {resContainer , resChildrens};
    return resChildrens;

};
async function postsIds(blockId = '5f28676954394485a6db3de0b592a862') {
  console.log('postsIds: ' + blockId);

  let listIDs = [];
  const resChildrens = await notion.blocks.children.list({block_id: blockId});
  resChildrens.results.forEach(o=>listIDs.push({params:{id:o.id}}));

  return listIDs;

};

export {posts , postsIds};