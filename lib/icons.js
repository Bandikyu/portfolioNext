import {posts} from './posts'

export async function icons() {

    let icons = [];
    let callApi = await fetch(`${process.env.URL_PAG}/api/endPoint` , {method: 'GET'})
    let respJSON = await callApi.json();
    let ids = await respJSON.result;

    for(let id in ids) {

        let callNotion = await posts(ids[id])
        let page = callNotion.resContainer;
        // @ts-ignore
        if(!!page.icon){
            icons.push({
                id: page.id,
                // @ts-ignore
                icon: page.icon.emoji
            })
        }
    }
    return icons;
}


