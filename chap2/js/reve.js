// TODO : écrire la fonction compterElements
function compterElements(string) {
    if (string.split(' ').length > 0) {
        return document.querySelectorAll(string).length;
    } else {
        if (string.charAt[0] === ".") {
            return document.getElementsByClassName(string).length;
        } else {
            return document.getElementsByTagName(string).length;
        }
    }
}


console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2
