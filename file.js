//

let nome = prompt("Ciao, inserisci il tuo nome: ")


if (nome == ""){
    console.log("Non hai inserito nessun nome");
    window.close()
}

let scrivinome = document.getElementById('demo');
scrivinome.innerHTML = "Ciao " + nome + " sei un coglione";

let scrivic = document.getElementById('ciccio');
scrivic.innerHTML = "Cambia la tua vita adesso!";

let bottone = document.getElementById('clicca');



bottone.onclick = function(){
    document.location.href = "https://it.pornhub.com/view_video.php?viewkey=ph6154784b730b5";
}



