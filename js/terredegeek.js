let terreDeGeek = document.getElementById("terreDeGeek");
let tdgcard = document.getElementById("card");

terreDeGeek.onclick = function() {
    tdgcard.innerHTML = `<article class='bg bg-light' style='height:400px;width:250px'><h2 class='text-center police'>Terre de Geek</h2><p class='p-2 m-2 Police'>Ce projet à été réalisé dans le cadre de la découverte du HTML/CSS.</p><a href='https://22101986.github.io/Terre_De_Geek/' class='btn btn dark border border-dark m-2'>GH-page</a><br><a href='https://github.com/22101986/Terre_De_Geek' class='btn btn dark border border-dark m-2 Police'>GitHub</a><br><a href='index.html' class='btn btn dark border border-dark m-2'>retour</a></article>`
}
