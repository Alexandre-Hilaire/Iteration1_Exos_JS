// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log("Le nombre de voitures de Joe est", joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
console.log("Joe a ", joeInfo.bathrooms, "salles de bain"); 
joeInfo.bathrooms = 1 + 1;
console.log("Joe à maintenant", joeInfo.bathrooms, "salles de bain"); 
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
console.log(joeInfo.garage, "Joe n'a pas de garage");
joeInfo.garage = true;
console.log(joeInfo.garage, "Joe à un nouveau garage");

var team = { 
    players: [], //les objets sont des tablaux vides 
    games: []

}
team.players.push({ //On push manuellement les données dans les tableaux vides
    first_name: "Sebastien",
    last_name: "Chabal",
    age: 30,
});
team.games.push ({
    opponent: "All Blacks",
    team_points: 50,
    opponent_points: 40,
});

team.add_players = function (first_name, last_name, age){
    this.players.push({first_name: first_name, last_name: last_name, age: age});
};
team.add_games = function (opponent, team_points, opponent_points) {
    this.games.push({opponent: opponent, team_points: team_points, opponent_points: opponent_points});
};


console.log(team);


team.add_players("Thierry", "Dussotoir", 28);
team.add_players("Mathieu", "Bastareaud", 25);

console.log(team.players);

team.add_games("Australie", 30, 50);
team.add_games("Angleterre", 80, 10);

console.log(team.games);

function all_team_points_calcultator(){
    let all_team_points = 0;
    for (let i = 0; i < team.games.length; i++){
        all_team_points = all_team_points + team.games[i].team_points;
    }
    return all_team_points;
}
console.log("le total des points de l'équipe est", all_team_points_calcultator());

function moy_opponents_points (){
    let all_opponents_points = 0;
    let moy_opponents_points = 0;
    for (let i = 0; i < team.games.length; i++){
        all_opponents_points = all_opponents_points + team.games[i].opponent_points;
    }
    moy_opponents_points = all_opponents_points / team.games.length;
    return moy_opponents_points;
}
console.log("La moyenne des points marqués par les adversaires est de", moy_opponents_points());