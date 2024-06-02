var res = fetch("https://restcountries.com/v3.1/all")
res.then((data) => data.json()).then((data1) => foo(data1));

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function foo(data1) {
  for (let i = 0; i < data1.length; i++) {
    var col = document.createElement("div");
    col.className = "col-lg-4";
    col.innerHTML = `<div class="card border-primary mb-3" style="max-width: 18rem;">
      <div class="card-header text-center">${data1[i].name.common}</div>
      <div class="card-body text-primary">
        <img src="${data1[i].flags.png}" class="card-img-top" alt="Flag of ${data1[i].name.common}">
        <div class="card-title">Capital: ${data1[i].capital ? data1[i].capital[0] : "N/A"}</div>
        <p class="card-text">Region: ${data1[i].region}</p>
        <p class="card-text">Country Code: ${data1[i].cca3}</p>
      </div>
    </div>`;
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
 
}
