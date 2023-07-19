// you can write js here
console.log('exo-3');

let player_input = prompt("Your choice (rock, paper, scissors) ?)"); // Demande au joueur de rentrer une réponse
player_input = player_input.toLowerCase(); // Converti la chaîne de caractère en minuscules

function get_player_choice (player_input) { // Si le chaîne de caractère est valide la fonction renvoie la réponse et l'affiche à la console
    if (player_input === "rock" || player_input === "paper" || player_input === "scissors" || player_input === "bomb"){
        return player_input;
    }
    else {
        console.log("Veuillez entrer l'un des mots");
        prompt(player_input);
    }

}

function get_computer_choice(){ // La fonction demande 3 nombres aléatoire en 0 et 2 et selon le nombre renvoie une réponse
    let computer = Math.floor(Math.random() * 3); //Math.floor pour abtenir des entiers
    if (computer == 0) {
        computer = 'rock';
    }
    else if (computer == 1) {
        computer = 'paper';
    }
    else {
        computer = 'scissors';
    }
    return computer
}

//let computer = get_computer_choice();



//console.log("choix de l'ordinnateur", computer);

function find_winner(get_player_choice, get_computer_choice){ // Comparaison des réponse 
    if(get_player_choice == get_computer_choice) {
        console.log("tied");
    }
    else if ((get_player_choice == "rock" && get_computer_choice == "paper") ||
             (get_player_choice == "scissors" && get_computer_choice == "rock") ||
             (get_player_choice == "paper" && get_computer_choice == "scissors")){
        console.log("L'ordinnateur à gagné");
    }
    else if (get_player_choice == "bomb") {
        console.log("Vous avez gagné !");
    }
    else {
        console.log("Vous avez gagné");
    }
}

function play_game () { //Fonction qui fait fonctionner entièrement le jeu
    u_choice = get_player_choice(player_input);
    computer_choice = get_computer_choice();
    console.log(u_choice);
    console.log(computer_choice);
    console.log(find_winner(u_choice, computer_choice));
}
play_game();
