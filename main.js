// // Задачи
//
// // 1
// let a = (5 === 10) ? console.log('Верно') : console.log('Неверно');
//
// // 2
// let num = prompt('Введите число от 0 до 59')
//
// if (num < 15) {
//     message = 'Первая четверть часа';
// } else if (num > 30) {
//     message = 'Вторая четверть часа';
// } else if (num > 45) {
//     message = 'Третья четверть часа';
// } else {
//     message = 'Четвертая четверть часа'
// }
//
// // 3
// let lang = 'ru';
// let arr;
// // if
// if (lang === 'ru') {
//     arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// } else if (lang === 'en') {
//     arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// }
//
// console.log(arr);
// // switch-case
// switch (lang) {
//     case 'ru':
//         arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//         break
//     case 'en':
//         arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//         break
// }
//
// console.log(arr);
//
// const weeks = {
//     ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// }
//
// let arr = weeks[lang];
// console.log(arr);


// Работа с if-else
//
// let a = prompt("Введите число (1, 0 или -3): ", 0)
//
// if (a == 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }
//
// if (a > 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }
//
// if (a < 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }
//
// if (a >= 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }
//
// if (a <= 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }
//
// if (a != 0) {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }
//
// let a = prompt("Введите что-нибудь (test, тест или 3): ", "test")
//
// if (a == "test") {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }
//
// let a = prompt("Введите число ('1', 1 или 3): ", "1")
//
// if (a == "1") {
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }


// Работа с && (и) и || (или)
//
// let a = prompt("Введите число (5, 0, -3 или 2): ", "5")
//
// if (a > 0 && a < 5) {
//     console.log("Верно")
// } else {
//     console.log("Неверно")
// }
//
// if (a == 0 || a == 2) {
//     console.log(a + 7)
// } else {
//     console.log(a / 10)
// }

// let a = prompt("Введите число (1, 0, 3): ", "1")
// let b = prompt("Введите число (3, 6, 5): ", "3")
//
// if (a <= 1 && b >= 3) {
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }
//
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//     console.log("Верно")
// } else {
//     console.log("Неверно")
// }


// Задачи на switch-case
//
// let num = 1
//
// switch (num) {
//     case 1:
//         result = "Зима";
//         break
//     case 2:
//         result = "Весна";
//         break
//     case 3:
//         result = "Лето";
//         break
//     case 4:
//         result = "Осень"
//         break
// }
//
// console.log(result)


// Задачи

// let day = prompt("Введите число от 1 до 31: ");
// let decade;
//
// if (day >= 1 && day <= 10) {
//     decade = 'Первая';
// } else if (day > 10 && day <= 20) {
//     decade = 'Вторая';
// } else if (day > 20 && day <= 31) {
//     decade = 'Третья';
// } else {
//     console.log('Введите корректное число для дня месяца');
// }
//
// console.log('Число ' + day + ' попадает в ' + decade + ' декаду месяца');

// let month = prompt("Введите число от 1 до 12: ");
// let season;
//
// if (month >= 1 && month <= 2 || month === 12) {
//     season = 'Зима';
// } else if (month >= 3 && month <= 5) {
//     season = 'Весна';
// } else if (month >= 6 && month <= 8) {
//     season = 'Лето';
// } else if (month >= 9 && month <= 11) {
//     season = 'Осень';
// } else {
//     console.log('Введите корректное число для месяца');
// }
//
// console.log('Месяц №' + month + ' относится к сезону ' + season);

// let str = 'abcde';
//
// if (str[0] === 'a') {
//     console.log('Да');
// } else {
//     console.log('Нет');
// }

// let strInt = '12345';
//
// if ((strInt[0] === "1") || (strInt[1] === "2") || (strInt[2] === "3")) {
//     console.log('Да');
// } else {
//     console.log('Нет');
// }

// let str = '123';
// let sumstr = str[0] + str[1] + str[2]
//
// console.log(sumstr);

// let str = '251341'
//
// if ((str[0] + str[1] + str[2]) == (str[3] + str[4] + str[5])) {
//     console.log("Да")
// } else {
//     console.log("Нет")
// }