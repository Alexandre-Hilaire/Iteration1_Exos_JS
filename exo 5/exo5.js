// you can write js here

console.log('exo-5');

let user_input = prompt("Entrer votre mot ou phrase à traduire en baleinien"); // Demande à l'utilisateur
user_input = user_input.toUpperCase(); // conertir la chaine en majuscules

let vowels = ['A', 'E', 'I', 'O', 'U', 'Y']; // Le tableau des voyelles (alphabet baleinien)

let result_array = []; // Le tableau du résultat de la traduction en baleinien

for (let i in user_input){
    // Version boucle
    //for (let j in vowels){
        // if (user_input[i] == vowels[j]){
        //     result_array.push(vowels[j])
            //version indexof
            if (vowels.indexOf(user_input[i]) != -1) { //Si la valeur existe dans le tableau index of renvoie 1 et il l'ajoutera dans le tableau result, si elle n'existe pas il ne fait rien
                result_array.push(user_input[i]);
            }
      //  }
    }


console.log("La traduction en baleinien est ", result_array.join('')); // les '' pour supprimer les virgules entre chaques lettres