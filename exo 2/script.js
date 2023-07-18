// you can write js here
console.log('exo-2');

const myDate = new Date(Date.now());


let week_day = "Nous sommes un jour de semaine";
let week_end = "Nous sommes le week-end";

const today = myDate.getDay();
console.log(today);

if (today > 0 && today < 6) {
    console.log(week_day);
}
else {
    console.log(week_end);
}