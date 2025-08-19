const title = 'Another try';
const screens = "Простые, Сложные, Интерактивные";
const screePrice = 10000;
const rollback = 10;
let fullPrice = 100000;
const adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log("Стоимость верстки экранов " + screePrice + " рублей/ долларов/гривен/юани");
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase().split(', '));
console.log('Процент отката посреднику за работу ' + fullPrice * (rollback / 100));
