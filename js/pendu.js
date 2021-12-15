let pendu  = document.getElementById("pendu");
let penducard = document.getElementById("card");


pendu.onclick = function() {
    penducard.innerHTML = `<article class='bg bg-light' style='height:400px;width:250px'><h2 class='text-center police'>Jeux du pendu</h2><p class='p-2 m-2 Police'>Ce projet à été réalisé afin de s'exercer à la conception d'algoritmes en JavaScript..</p><a href='https://22101986.github.io/jeu_du_pendu/' class='btn btn dark border border-dark m-2'>GH-page</a><br><a href='https://github.com/22101986/jeu_du_pendu' class='btn btn dark border border-dark m-2 Police'>GitHub</a><br><a href='index.html' class='btn btn dark border border-dark m-2'>retour</a></article>`
}

