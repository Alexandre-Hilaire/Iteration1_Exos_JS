// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

console.log(secretMessage);

let delete_end_element = secretMessage.pop(); //créer une variable qui retire le dernier élément du tableau

console.log(secretMessage);

secretMessage.push("to", "program"); // Ajoute les deux mots à la fin du tableau

console.log(secretMessage);

secretMessage.splice(6, 1, "right"); // Accède à la valeur de l'index 6, la supprime et la remplace par right

console.log(secretMessage);

secretMessage.shift(); //Supprime le premier élément du tableau

console.log(secretMessage);

secretMessage.unshift("Programming")

console.log(secretMessage);

secretMessage.splice(5, 5, "know"); //Supprime les index de "get" à "time" compris et les ramplace par "know"

console.log(secretMessage);

console.log(secretMessage.join()); // Affiche le message secret 