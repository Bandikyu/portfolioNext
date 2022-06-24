import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function icons(contentBlock) {
    let allIconsAndIDs = [];

    for(let block in contentBlock) {
        if(contentBlock[block].type === 'child_page') {

            let resContainer = await notion.pages.retrieve({page_id: contentBlock[block].id});
            // @ts-ignore
            if(resContainer.icon !== null) {

                // @ts-ignore
                let iconAndID = {id:resContainer.id, icon:resContainer.icon[resContainer.icon.type]} 
                allIconsAndIDs.push(iconAndID);
            }
        }
    }
    if(allIconsAndIDs.length > 0) {
        return allIconsAndIDs;
    }
    return null;
}


