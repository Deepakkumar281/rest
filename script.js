// // XML-HTTP request
// // They are used to interact with the server via api

// // step 1 :
// // create a XHR object

// var request = new XMLHttpRequest();
// // step 2:
// // opening a request
// request.open("GET", "https://restcountries.com/v3.1/all");

// //step 3:
// // kickstart the HTTP opertion
// request.send();

// //step 4:
// // once the data has beed successfully received from the server
// // if the status code of the server is 200
// // then we need to process the data
// // here the json.parse string to array
// request.onload = function () {
//   //here the conversion of string to objects
//   var res = JSON.parse(request.response);
//   console.log(res);
//   for (var i = 0; i < res.length; i++) {
//     console.log(res[i].region);
//   }
//   var casia = res.filter((ele) => ele.region == "Asia");
//   var cpopu = casia.reduce((acc, cv) => acc + cv.population, 0);
//   console.log(cpopu);
// };

// var ele = document.createElement('div');
// ele.innerHTML=`<div class='container'>
// <div class='row'>
// <div class='col'>this a col</div>
// </div>
// </div>
// `

// document.body.append(ele)
// function foo() {
//   var first_name = document.getElementById("First_name").value;
//   var Middle_name = document.getElementById("Middle_name").value;
//   var Last_name = document.getElementById("Last_name").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   console.log(`first name:${first_name},Middle name:${Middle_name},Last name:${Last_name},Email:${email},password:${password}`);
// }


// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function calc(a, b, callback) {
//   console.log(callback(a, b));
// }

// let a = 3;
// let b = 4;

// calc(a, b, add);      
// calc(a, b, multiply); 


var res = fetch("https://restcountries.com/v3.1/all")
    .then(data => data.json())
    .then(data1 => foo(data1))
    .catch(error => console.log(error));

var container = document.createElement('div');
container.className = 'container';

var row = document.createElement('div');
row.className = 'row';

function foo(data) {
    for (let i = 0; i < data.length; i++) {
        let country = data[i];
        
        var col = document.createElement('div');
        col.className = 'col-lg-4';

        var card = document.createElement('div');
        card.className = 'card border-primary mb-3';
        card.style.maxWidth = '18rem';

        var cardHeader = document.createElement('div');
        cardHeader.className = 'card-header text-center';
        cardHeader.innerText = country.name.common;

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body text-primary';

        var flag = document.createElement('img');
        flag.src = country.flags.svg;
        flag.alt = `${country.name.common} Flag`;
        flag.className = 'card-img-top mb-3';

        var capital = document.createElement('p');
        capital.className = 'card-text';
        capital.innerText = `Capital: ${country.capital ? country.capital[0] : 'N/A'}`;

        var region = document.createElement('p');
        region.className = 'card-text';
        region.innerText = `Region: ${country.region}`;

        var countryCode = document.createElement('p');
        countryCode.className = 'card-text';
        countryCode.innerText = `Country Code: ${country.cca3}`;

        cardBody.appendChild(flag);
        cardBody.appendChild(capital);
        cardBody.appendChild(region);
        cardBody.appendChild(countryCode);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        col.appendChild(card);
        row.appendChild(col);
        container.appendChild(row);
        document.body.appendChild(container);
    }

   
}







// var res = fetch("https://restcountries.com/v3.1/all")
// res.then((data)=>data.json()).then((data1)=>foo(data1))

// var container =document.createElement("div")
// container.className="container";

// var row =document.createElement("div")
// container.className="row";

// function foo(data1){
//   for (let i = 0; i < data1.length; i++) {
//     var col = document.createElement("div")
//     col.className="col-lg-4";
//     col.innerHTML=`<div class="card border-primary mb-3" style="max-width: 18rem;">
//     <div class="card-header">Header</div>
//     <div class="card-body text-primary">
//       <h5 class="card-title">Primary card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
//   </div>`;
//     row.append(col);
//     container.append(row);
//     document.body.append(container)
// }
// }
