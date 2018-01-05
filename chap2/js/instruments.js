var links = document.getElementsByTagName("a");
var linkslength = links.length;
console.log(linkslength);
console.log(links[0].getAttribute("href"));
console.log(links[linkslength-1].getAttribute("href"));

function possede(ident, cls){
    var element = document.getElementById(ident);
    if (element !== null){
        if (element.classList.contains(cls)){
            console.log(true);
        } else {
            console.log(false);
        }
    } else {
        console.error("l'id est introuvable.");
    }
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
