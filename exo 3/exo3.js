// you can write js here
console.log('exo-3');

let player_input = prompt("Your choice (rock, paper, scissors) ?)");
player_input.toLowerCase();

function get_player_choice (player_input) {
    if (player_input === "rock" || player_input === "paper" || player_input === "scissors"){
        return player_input;
    }
    else {
        console.log("Veuillez entrer l'un des mots");
        prompt(player_input);
    }

}

function get_computer_choice(){
    let computer = Math.floor(Math.random() * 3);
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

let computer = get_computer_choice();

console.log("choix de l'ordinnateur", computer);

function find_winner(get_player_choice, get_computer_choice){
    if(get_player_choice == get_computer_choice) {
        console.log("tied");
    }
    else if ((get_player_choice == "rock" && get_computer_choice == "paper") ||
             (get_player_choice == "scissors" && get_computer_choice == "rock") ||
             (get_player_choice == "paper" && get_computer_choice == "scissors") ){
        console.log("L'ordinnateur à gagné");
    }
    else {
        console.log("Vous avez gagné");
    }
}
