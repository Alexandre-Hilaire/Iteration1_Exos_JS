// you can write js here
console.log('exo-2');

let isTesting  = true;

    const myDate = new Date(Date.now()); // myDate est la date d'aujourd'hui

console.log(myDate);
//Les variables messages
let week_day = "Nous sommes un jour de semaine";
let week_end = "Nous sommes le week-end";
//les variable de date (jour) et heure
let day = myDate.getDay();
let hour = myDate.getHours();

// si isTesting est vrai demande le jour et l'heure
if (isTesting){
    day = prompt('entrez la date test',"");
    hour = prompt("entrez l'heure test","");
}

//Condition des messages
if ((day == 1 && hour > 9) || (day == 5 && hour > 17) || (day > 1 && day < 5)) {
    console.log(week_day);
    console.log(today, hour);
}
else {
    console.log(week_end);
}