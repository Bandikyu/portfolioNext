export default function Pagina() {
    cosa();
    return (
        <div>Pagina de prueba</div>
    )
}


/*  async function cosa () {
    let api = await fetch("/api/endPoint" , {method: 'GET'});
    // console.log(api);
    let apiJSON = await api.json();
    console.log(apiJSON);
    return {
        props:{
            cosas:"cosas"
        }
    }
} */