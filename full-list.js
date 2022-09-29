const url = "https://www.amiiboapi.com/api/amiibo/";

//console.log(url);

const out = document.querySelector("div#container");
const search = document.querySelector("#search")



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
        <a href="details.html">Read more</a>
        </div>`;
  }
  out.innerHTML = newDivs;
}

fetch (url)
.then(data => data.json())
.then(list => listData(list.amiibo))
.catch(error => out.innerHTML = "Something's wrong! " + error.message);