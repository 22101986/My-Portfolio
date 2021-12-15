let starWars = document.getElementById("starWars");
let swcard = document.getElementById("card");


starWars.onclick = function() {
    swcard.innerHTML = `<article class='bg bg-light' style='height:400px;width:250px'><h2 class='text-center police'>Star Wars Api</h2><p class='p-2 m-2 Police'>Projet de site autour de Star Wars, mise en oeuvre d'une requète HTTP, utilisation de l'API "swapi".</p><a href='https://22101986.github.io/StarWarsApi/' class='btn btn dark border border-dark m-2'>GH-page</a><br><a href='https://github.com/22101986/StarWarsApi' class='btn btn dark border border-dark m-2 Police'>GitHub</a><br><a href='index.html' class='btn btn dark border border-dark m-2'>retour</a></article>`
}

