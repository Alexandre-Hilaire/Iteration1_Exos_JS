// you can write js here
console.log('hello from file');

let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?"); //Demande d'entrée par l'utilisateur
var celsius = null;
var fahrenheits = null;

function kelvins_to_celsius(kelvins) {
    celsius = kelvins -=273;  // La température celsius est égale à la variable kelvins a laquelle on soustrait 273
    return celsius;
}
kelvins_to_celsius(kelvins);

console.log("La température en celsius est de", celsius);

function celsius_to_fahrenheits(celsius) {
    fahrenheits = celsius * (9/5) +32; // Opération pour conervitr la température celsius en farhenheits
    return fahrenheits;
}

celsius_to_fahrenheits(celsius);

console.log("la température en fahrenheits est de", Math.floor(fahrenheits)); //La méthode math.floor pour arondir le nombre afin d'obtenir un entier
