const url = "https://www.amiiboapi.com/api/";

const out = document.querySelector("div#container");

function listData(list) {
    //console.log("List", list);
    out.innerHTML = "";
    let newDivs = "";
    for (let item of list) {
        console.log(item);
          newDivs += `<div>
          <img src="${item.image}" alt="${item.name}">
          <h2>${item.name}</h2>
          <p>From: ${item.amiiboSeries}</p>
          </div>`;
    }
    out.innerHTML = newDivs;
}