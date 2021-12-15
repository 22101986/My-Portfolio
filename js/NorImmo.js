let norimmo = document.getElementById("norimmo");
let nicard = document.getElementById("card");


norimmo.onclick = function() {
    nicard.innerHTML = `<article class='bg bg-light' style='height:400px;width:250px'><h2 class='text-center police'>NorImmo</h2><p class='p-2 m-2 Police'>Ce projet à été réalisé, en équipe, dans le cadre de la partie frontend
    de la formation developpeur web/web mobile.</p><a href='https://romainmeteye.github.io/NorImmo/' class='btn btn dark border border-dark m-2'>GH-page</a><br><a href='https://github.com/romainMeteye/NorImmo' class='btn btn dark border border-dark m-2 Police'>GitHub</a><br><a href='index.html' class='btn btn dark border border-dark m-2'>retour</a></article>`
}

