const url = "https://www.amiiboapi.com/api/amiibo/?character=";

//console.log(url);

const out = document.querySelector("div#container");
const select = document.querySelector("select");

let id;

let selectCharacter = () => {
  let selectedValue = select.value;

  id = selectedValue;

  fetch (url + id)
  .then(data => data.json())
  .then(list => listData(list.amiibo))
  .catch(error => out.innerHTML = "Something's wrong! " + error.message);

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
}

select.addEventListener("change", () => {
  selectCharacter();
})




  