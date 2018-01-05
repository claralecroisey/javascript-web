// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
for (var i=0; i<journaux.length; i++){
    var journal = document.createElement("li");
    document.getElementById('contenu').insertAdjacentHTML("afterBegin", 
    '<li id="javascript"><a href=">'+journaux[i]+'">'+ journaux[i] + '</a></li>');
}