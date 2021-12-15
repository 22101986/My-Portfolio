let shifumi = document.getElementById("shifumi");
let shicard = document.getElementById("card");


shifumi.onclick = function() {
    shicard.innerHTML = `<article class='bg bg-light' style='height:350px;width:250px'><h2 class='text-center police'>Shi Fu Mi</h2><p class='p-2 m-2 Police'>Ce projet à été réalisé afin de s'exercer à la conception d'algoritmes en JavaScript.</p><a href='https://22101986.github.io/SHI_FU_MI/' class='btn btn dark border border-dark m-2'>GH-page</a><br><a href='https://github.com/22101986/SHI_FU_MI' class='btn btn dark border border-dark m-2 Police'>GitHub</a><br><a href='index.html' class='btn btn dark border border-dark m-2'>retour</a></article>`
}

