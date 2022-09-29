const out = document.getElementById("container");

//Lage et objekt som lar oss akksessere alle query string parametere
let params = new URLSearchParams(document.location.search);
//Hente id parameteret fra query string
let id = params.get("id");

async function getCard() {
    try {
        const api = `https://www.amiiboapi.com/api/amiibo/?id=${id}`;
        console.log(api);
        const response = await fetch(api);
        //console.log(response);
        const data = await response.json();
        //console.log("Data:", data);
        listData (data.amiibo, out);
    } catch (error) {
        out.innerHTML = `Could not fetch data...`;
    }
}

getCard();

function listData(card, out) {
    console.log(card);
    document.title = card.name;
    document.querySelector("h1").innerHTML = card.name;
    const releases = getReleases(card.release);
    let newDiv = `<div id="${card.head}${card.tail}">
        <img src="${card.image}" alt="${card.name}">
        <p>Character:<br><strong>${card.character}</strong></p>
        <p>Game-series:<br><strong>${card.gameSeries}</strong></p>
        <p>Amiibo-series:<br><strong>${card.amiiboSeries}</strong></p>
        <p>Type:<br><strong>${card.type}</strong></p>
        <p>Released:</p>
        ${releases}
    </div>`;
    //console.log(newDiv);
    out.innerHTML = newDiv;
}
