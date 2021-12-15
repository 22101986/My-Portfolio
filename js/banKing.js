let banking = document.getElementById("banking");
let bankcard = document.getElementById("card");


banking.onclick = function() {
    bankcard.innerHTML = `<article class='bg bg-light' style='height:400px;width:250px'><h2 class='text-center police'>BanKing</h2><p class='p-2 m-2 Police'>Ce projet est le projet "fil rouge" de la formation, aproche frontend et backend.</p><a href='https://22101986.github.io/BanKing/' class='btn btn dark border border-dark m-2'>GH-page</a><br><a href='https://github.com/22101986/BanKing' class='btn btn dark border border-dark m-2 Police'>GitHub</a><br><a href='index.html' class='btn btn dark border border-dark m-2'>retour</a></article>`
}

