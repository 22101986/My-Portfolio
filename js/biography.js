let main = document.getElementById("main");
let ul = document.createElement("ul");
let family = [ 
    "Audrey: 33ans",
    "Roxane: 9,5ans",
    "Hector: 4ans",
    "Suzane: 2ans"

];

let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let response = JSON.parse(httpRequest.responseText);
                let element = main.appendChild(ul);
                element.innerHTML += `<li class='list-group-item list-group-item-dark mx-2 my-2 police text-dark bg bg-light'><h3>En savoir plus</h3></li>`;
                element.innerHTML += `<li class='list-group-item list-group-item-dark mx-2 my-2 police text-light bg bg-dark'>Age: ${response.age }ans<br>Surnom: ${response.nickname }</li>`;
                element.innerHTML += `<li class='list-group-item list-group-item-dark mx-2 my-2 police text-light bg bg-dark'>Adresse: ${response.adress}<br>${response.postal_code}</li>`;
                element.innerHTML += `<li class='list-group-item list-group-item-dark mx-2 my-2 police text-light bg bg-dark'>Passions:<br> ${response.passions.nature}, ${response.passions.sport}, ${response.passions.culture}, ${response.passions.other}, ${response.passions.art}...</li>`;
                element.innerHTML += `<li class='list-group-item list-group-item-dark mx-2 my-2 police text-dark bg bg-light'><h3>Ma Famille</h3></li>`;
                for(member of family) {
                    element.innerHTML += `<li class='list-group-item list-group-item-dark mx-2 my-2 police text-light bg bg-dark'> ${member } </li>`;
                    
                }
                }
   
            }
        }

    

httpRequest.open("GET", "data/informations.json");
httpRequest.send();















