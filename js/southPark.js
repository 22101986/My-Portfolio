let south_park = document.getElementById("southPark");
let spcard = document.getElementById("card");


south_park.onclick = function() {
    spcard.innerHTML = `<article class='bg bg-light' style='height:400px;width:250px'><h2 class='text-center police'>Jeux Mémory South park</h2><p class='p-2 m-2 Police'>Ce projet à été réalisé dans le cadre d'une évaluation sur la partie frontend
    de la formation developpeur web/web mobile.</p><a href='https://22101986.github.io/semaine_8_-val/' class='btn btn dark border border-dark m-2'>GH-page</a><br><a href='https://github.com/22101986/semaine_8_-val' class='btn btn dark ark border border-dark m-2'>GitHub</a><br><a href='index.html' class='btn btn dark ark border border-dark m-2'>retour</a></article>`
}


