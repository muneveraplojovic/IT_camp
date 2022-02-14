// a = window.prompt("Unesi broj;");

// if (a % 2 === 0) {
//   console.log("broj je paran");
// } else {
//   console.log("broj je neparan");
// }

//god = 2003;
//mes = 12;
//dan = 13;
//a = window.prompt("Unesite godinu:");
//b = window.prompt("Unesite mesec:");
//c = window.prompt("Unesite dan:");
//console.log(2021 - god);
//console.log(12 - mes);
//console.log(30 - 13);//

// //drugi zadatak/
// a = window.prompt("Unesite prvi broj");
// b = window.prompt("Unesite drugi broj");
// c = window.prompt("Unesite treci broj");
// let d = Math.max(a, b, c);
// console.log(d);

//treci zadatak/
// a = window.prompt("Unesite prvi broj");
// b = window.prompt("Unesite drugi broj");
// c = window.prompt("Unesite treci broj");
// var brojevi = [a, b, c];
// brojevi.sort();
// console.log(brojevi);

// a=
// b=
// c=

// if (a> b && a>c) {
//     console.log ('a', a);
// } else if (b> a && b>c){
//     console.log ('b', b)
// }
// else {console.log ('c', c)
// }

//a = 10;
//b = 10;
//c = 10;

//if (a + b > c && a + c > b && b + c > a) {
//console.log("trougao je moguc");
//} else {
//console.log("trougao je nemoguc");
//}
// pocetna vrednost krajnja vrednost korak//
// for (let i = 0; i < 10; i++) {
//   console.log("Hello world ", i);
// }

//  for (let i = 0; i < 10; i = i + 2) {
//    console.log("Hello world ", i);
// }
// for (let i = 0; i < 10; i = i + 3) {
//   console.log("Hello world ", i);
// }
// for (let i = 1; i < 10; i += 2) {
//   console.log("Hello world ", i);
// }

// for (let i = 0; i < 1; i += 2) {
//   console.log("Hello world ", i);
// }
// for (let i = 0; i < 15; i -= 1) {
//   console.log("Hello world ", i);
// } infinite

// for (let i = 18; i > 0; i -= 1) {
//   console.log("Hello world ", i);
// }

// for (let i = 0; i < 101; i += 1) {
//   console.log("Hello world", i);
// }

// for (let i = 0; i < 101; i += 2) {
//   console.log("Hello world", i);
// }

// for (let i = 0; i < 101; i += 5) {
//   console.log("Hello world", i);
// }

// for (let i = 0; i < 5; i++) {
//   broj = Number(prompt("Unesite broj:"));
//   console.log("Uneti broj je:", broj);
// }

//od unetih brojeva se odvaja max//
// var max = 0;
// for (let i = 0; i < 5; i++) {
//   broj = Number(prompt("Unesite broj:"));
//   console.log(broj);
//   if (i === 0) {
//     var max = broj;
//   }
//   if (broj > max) {
//     max = broj;
//   }
// }
// console.log("Max je:");
// console.log(max);

// for (let i = 0; i < 15; i++) {
//   let i = prompt("Enter a number: ");
//   if (i % 2 == 0) {
//     console.log("The number is even:", i);
//   } else {
//     console.log("The number is odd:", i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     continue;
//   }
//   console.log("posle ifa", i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log("javascript");
// }

// for (let i = 0; i < 3; i++) {
//   console.log("je super ");
// }

//   if (i < 3) {
//     console.log("java");
//   } else {
//     console.log("je super ");
//   }
// }

// broj = 34;
// broj = Number(window.prompt("Unesite broj:"));
// for (let i = 1; i < broj; i++) {
//   console.log(i);
// }

//parne brojeve
// broj = Number(window.prompt("Unesite broj:"));
// for (let i = broj; i > 0; i--) {
//   console.log(i);
// }

// broj = Number(window.prompt("Unesite broj:"));
// for (let i = broj; i > 0; i -= 5) {
//   console.log(i);
// }

// brojDanauGodini = 245;
// mesec = Math.ceil(brojDanauGodini / 30);

// switch (mesec) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:+++x
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
// }

// dan = brojDanauGodini - (mesec - 1) * 30;
// console.log(dan);

// switch (brojDanauGodini % 7) {
//   case 0:
//     day = "Monday";
//     break;
//   case 1:
//     day = "Tuesday";
//     break;
//   case 2:
//     day = "Wednesday";
//     break;
//   case 3:
//     day = "Thursday";
//     break;
//   case 4:
//     day = "Friday";
//     break;
//   case 5:
//     day = "Saturday";
//   case 6:
//     day = "Sunday";
//     break;
// }
// console.log(day);

// a = 635.54;
// console.log(Match.floor(a));
//unesemo brojeve neki max br brojeva i posle da nam odvji koliko ima parnih koliko ne

// console.log(object);

// limit = 10;
// sum = 0;

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }
// console.log(`The sum of even numbers from 0 - ${limit} is: \n ${sum}`);

// for (let i = 0; i <= 1000; i++) {
//  let num = Number(prompt("Enter a number: "));
//  if (num % 2 === 0) {
//    console.log("The number is even:", i);
//  } else {
//      console.log("The number is odd:", i);
//    }
//    ;
// sum = Number(prompt;
// for (var x = 0; x <= 1000; x++) {
//   if (x % 3 === 0 || x % 5 === 0) {
//     sum += x;
//   }
// }

// int.max = 1000;
// int.sum = 0;
// for (let num = 3; num < max; num++) {
//   if (num % 3 === 0 || num % 5 === 0) sum += num;
// }
// console.log("sum");

// let sum = 0;
// for (i = 1; i <= 1000; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   } else i % 3 == 0;
// }
// console.log(sum);

// broj = Number(window.prompt("Unesite brojeve:"));
// if (broj % 2 === 0) {
//   console.log("Broj je paran!");
// } else {
//   console.log("Broj je neparan!");
// }

// Broj = Number(window.prompt("Unesite beojeve:"));
// if (Broj % 2 === 0) {
//   console.log("Broj je paran!");
// } else {
//   console.log("Broj je neparan!");
// }

// n = n;
// for (i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     n += i;
//   }
// }

// for (let i = 0; i <= 1000; i++) {
//   let num = prompt("Enter a number: ");
//   if (num % 2 === 0) {
//     console.log("The number is even:");
//   } else {
//     console.log("The number is odd:");

// var max = 5;
// for (let i = 0; i <= 5; i++) {
//   let broj = Number(prompt("Unesite broj:"));
//   if (broj % 2 === 0 > max) {
//     console.log("Broj je paran!");
//   } else {
//     console.log("Broj je neparan!");
//   }
// }
// var parni = 0;
// var neparni = 0;
// for (let i = 0; i < 10; i++) {
//   broj = Number(prompt("Unesite broj;"));
//   if (broj % 2 === 0) {
//     parni += 1;
//   } else neparni += 1;

// for (let i = 1; i <= 4; i++) {
//   fakt = 1;
//   for (let j = 1; j <= i; j++) {
//     fakt = fakt * j;
//   }
//   console.log(fakt);
//   suma += fakt;
// }
// console.log(suma);
// }
// console.log(parni);
// console.log(neparni);
// (!(i%3))

// var broj = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "fizz-buzz");
//   } else if (i % 5 === 0) {
//     console.log(i, "buzz");
//   } else if (i % 3 === 0) {
//     console.log(i, "fizz");
//   } else {
//     console.log(i);
//   }
// }
//interval
//code wars
// number = 7;
// fakt = 1;
// n = Number(prompt("unesite broj"));
// for (let i = 0; i <= number; i++) {
//   fakt *= i;
// }
// console.log(fakt);
//for petja
//faktorial
//fibonacijev niz
// nm1 = 1;
// nm2 = 1;
// console.log(nm1);
// console.log(nm2);

// for (let i = 0; i <= 8; i++) {
//   nm = nm1 + nm2;
//   console.log(nm);
// }

// suma = 0;
// for (let i = 1; i <= 4; i++) {
//   fakt = 1;
//   for (let j = 1; j <= i; j++) {
//     fakt = fakt * j;
//   }
//   console.log(fakt);
//   suma += fakt;
// }
// console.log(suma);

// for (var x = 0; x < 2; x++) {
//   for (var y = 0; y < 2; y++) {
//     console.log("x: " + x + ", y: " + y);
//   }
// }

// for (var i = 0; i <= 5; i++) {
//   for (var j = 0; j <= 1; j++) {
//     console.log("*");
//   }
// }

// var i, j, c;
// for (i = 1; i <= 6; i++) {
//   for (j = 1; j < i; j++) {
//     c = c + " *";
//   }
//   console.log(c);
//   c = "";
// }

// let zvezda = "";
// for (let i = 1; i <= 5; i++) {
//   console.log((zvezda += " *"));
// }
// let broj = "";
// for (let i = 1; i <= 10; i++) {
//   console.log((broj += i));
// }
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
//   console.log("");
// }
// for (let i = 3; i <= 30; i += 3) {
//   console.log(i);
//   console.log("");
// }
// for (let i = 4; i <= 40; i += 4) {
//   console.log(i);
//   console.log("");
// }
// for (let i = 5; i <= 50; i += 5) {
//   console.log(i);
//   console.log("");
// }

// for (let i = 1; i <= 10; i++) {
//   var red = "";
//   for (let j = 1; j <= 10; j++) {
//     red += `${i * j}\t`;
//   }
//   console.log(red, "\n");
// }
// var temp = 0;
// var Brtemp = 0;
// for (let i = 0; i <= 10; i++) {
//   let num = Number(prompt("Enter a number: "));
//   temp += num;
//   Brtemp++;
// }
// console.log(temp);
// console.log(Brtempt);
// console.log("Srednja vrednost temp je:", temp / Brtemp);

// var pozTemp = 0;
// var negTemp = 0;

// var pozBr = 0;
// var negBr = 0;
// for (let i = 0; i < 10; i++) {
//   t = Number(prompt("Unesite temperaturu:"));
//   if (t > 0) {
//     pozBr++;
//     pozTemp += t;
//   } else {
//     negBr++;
//     negTemp += t;
//   }
// }

// console.log("Srednja pozitivna je:", pozTemp / pozBr);

// console.log("Srednja negativna je:", negTemp / negBr);

// rec = String(prompt("Unesite rec:"));
// rec1 = "ratar";
// rec1 = "oko";
// rec1 = "kuk";
// rec1 = "ana";
// rec1 = "ded";

// if (rec === rec1) {
//   console.log("rec je polindrom");
// } else {
//   console.log("rec nije polindrom");
// }
///indexxxxi

// rec = "ratar";
// console.log(rec[0]);
// console.log(rec[1]);
// console.log(rec[2]);
// console.log(rec[3]);
// console.log(rec[4]);

//POLINDROM //

// let num = i * j;
// let s = String(num);
// let rs = s.split("").reverse().join("");
// if (s === rs) {
//   nbr = Math.max(nbr, num);
// }
// rec = "ratkr";
// for (let i = 0; i < Math.floor(rec.length / 2); i++) {
//   if (rec[i] !== rec[rec.length - 1 - i]) {
//     console.log("rec nije polindrom");
//     break;
//   }
//   if (i === Math.floor(rec.length / 2) - 1) {
//     console.log("rec je polindrom");
//   }
// }

// let nbr = 0;
// for (let i = 999; i >= 100; i--) {
//   for (let j = 999; j >= 100; j--) {}
// }

// console.log(nbr);

// for (let i = 10; i < 100; i++) {
//   for (let j = 10; j < 100; j++){
//     rez= String(i*j)
//   }
// }
//tel//

// brojac = 0;

// while (brojac < 10) {
//   console.log(brojac);
//   brojac++;
// }
// lozinka = 12345678;
// lozinka = Number("Unesite lozinku:");
//manga//
// while (true) {
//   console.log("lozinka je tacna");
// }

// lozinka = "sifra";
// sifra = prompt("Unesite sifru");

// while (lozinka !== sifra) {
//   sifra = prompt("Unesite ponovo sifru");
// }
// alert("Tacna lozinka");

//Homework//

// var unos = prompt("Unesite operaciju: (odaberite: +, -, * ili /)");

// var number1 = Number(prompt("Unesite prvi broj:"));
// var number2 = Number(prompt("Unesite drugi broj:"));
// let rezultat;

// if (unos == "+") {
//   rezultat = number1 + number2;
// } else if (unos == "-") {
//   rezultat = number1 - number2;
// } else if (unos == "*") {
//   rezultat = number1 * number2;
// } else if (unos == "/") {
//   rezultat = number1 / number2;
// }

// console.log(`${number1} ${unos} ${number2} = ${rezultat}`);

//do while//
//nizovi-arrays
//struktura podatska
// var cars = [113, 5, 8.7];
// for (let i = 0; i < car.length; i++) {
//   console.log(cars[1]);
// }

//provera
// var cars = [113, 5, 8.7];
// for (let i = 0; i < car.length; i++) {
//   console.log(cars[1] + "-" + 3);
// }
// console.log(cars[cars.length - 1]);
//ispisuje poslednji

//push array
// ucenici = [];
// brUcenika = Number(prompt("Unesite broj ucenika:"));

// for (let i = 0; i < brUcenika; i++) {
//   visina = Number(prompt("visina"));
//   ucenici.push(visina);
// }

// min = ucenici[0];
// max = ucenici[0];

// for (let i = 0; i < ucenici.length; i++) {
//   if (max < ucenici[i]) {
//     max = ucenicii[i];
//   }
//   if (min > ucenici[i]) {
//     min = ucenici[i];
//   }
// }
// console.log(ucenici);
// console.log(min);
// console.log(max);

// ucenici = [];
// brUcenika = Number(prompt("Unesite broj ucenika:"));

// for (let i = 0; i < brUcenika; i++) {
//   visina = Number(prompt("visina"));
//   ucenici.push(visina);
// }
// console.log(ucenici);
//nacin cuvanje podata //grupisemo odredjene vrednost
//sve mozemo da grupisemo
//node vezba1.jsconsole.log(i);
//

// var niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// suma = 0;
// // console.log(niz);
// for (let i = 1; i <= niz.length; i++) {
//   if (i % 2 === 0) {
//     console.log("Parni brojevi su:", i);

//     suma += i;
//   }
// }
// console.log("Suma parnih brojeva je:", suma);

// var niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// suma = 0;
// for (let i = 0; i <= niz.length; i++) {
//   niz[i] = niz[i] * 3;
// }
// console.log(niz);

// var niz1 = [1, 2, 3, 4, 5];
// var niz2 = [];

// for (let i = 0; i < niz1.length; i++) {
//   const el = niz1[i];
//   niz2.push(el);
// }
// niz1 = [];
// console.log(niz1);
// console.log(niz2);

// var a = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

// for (let i = 0; i <= a.length; i++) {
//   const row = a[i];
//   for (let j = 0; j <= row; j++) {
//     const el = row[j];
//     proces.stdout.write(row[j] + "\t");
//   }
// }
// console.log();
// i-kolona
// j-red

// let a = [
//   [0, 2, 3],
//   [6, 0, 8],
//   [11, 12, 0],
// ];
// for (i = 0; i < a.lenght; i++) {
//   console.log(a[i]);
// }
// for (let i = 0; i < a.length; i++) {
//   const row = a[i];
//   red = "";
//   for (let j = 0; j < row.length; j++) {
//     const el = row[j];
//     red += el + "\t";
//   }
//   console.log(red);
// }

// let a = [
//   [0, 2, 3],
//   [6, 0, 8],
//   [11, 12, 0],
// ];
// for (let i = 0; i < a.length; i++) {
//   const row = a[i];
//   red = "";
//   for (let j = 0; j < row.length; j++) {
//     const el = row[j];
//     red += el + "\t";
//   }
//   console.log(red);
// }

// console.log("");

// let b = [
//   [1, 2, 0],
//   [6, 0, 8],
//   [0, 12, 13],
// ];
// for (let i = 0; i < b.length; i++) {
//   const row = b[i];
//   red = "";
//   for (let j = 0; j < row.length; j++) {
//     const el = row[j];
//     red += el + "\t";
//   }
//   console.log(red);
// }

// a = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// for (let i = 0; i < a.length; i++) {
//   const row = a[i];
//   red = "";
//   for (let j = 0; j < row.length; j++) {
//     if (i === j) {
//       a[i][j] = 0;
//       //mozemo da dodamo  \ 0 *
//     }
//     red += `${row[j]}[${i}][${j}] \t`;
//   }
//   console.log(red);
// }

// a = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//[78,58,94,65]
// ];

// for (let i = 0; i < a.length; i++) {
//   const row = a[i];
//   red = "";
//   for (let j = 0; j < row.length; j++) {
//     if (i + j === a.length - 1) {
//       a[i][j] = 0;
//     }
//     red += `${row[j]}[${i}][${j}] \t`;
//   }
//   console.log(red);
// }

// a = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a[i].length; j++) {
//     if (i + j === a.length - 1) {
//       a[i][j] = "\\";
//       //mozemo da dodamo  \ 0 *
//     }
//     console.log(red);
//   }
// }
//moramo da probam da li radi

//array prototype includes

// for (let i = 0; i < niz1.length; i++) {
//   for (let j = 0; j < niz2.length; j++) {
//     if (niz1.includes(1, 2)) {
//     }
//     console.log(niz1.includes(1, 2), niz2.includes(1, 2));
//   }
// }
// console.log(niz2.includes(niz1[0]));
// console.log(niz2.includes(niz1[1]));
// console.log(niz2.includes(niz1[2]));

// for (let i = 0; i < niz1.length; i++) {
//   if (niz2.includes(niz1[i])) {
//     console.log("nalazi se", niz1[i]);
//   }
// }
//js exercise array w3 resorce

// var niz1 = [1, 2, 3];
// var niz2 = [100, 2, 1, 10];
// var res = [];
// for (let i = 0; i < niz1.length; i++) {
//   if (!niz2.includes(niz1[i])) {
//     console.log("ne nalazi se", niz1[i]);
//     res.push(niz1[i]);
//   }
// }

// for (let i = 0; i < niz2.length; i++) {
//   if (!niz1.includes(niz2[i])) {
//     console.log("ne nalazi se", niz2[i]);
//     res.push(niz2[i]);
//   }
// }

// console.log(res);
// 30.zadatak
// niz1 = [1, 2, 3];
// niz2 = [2, 30, 1];

// niz = [];
// for (let i = 0; i < niz1.length; i++) {
//   if (!niz.includes(niz1[i])) {
//     niz.push(niz1[i]);
//   }
// }
// console.log(niz);

// for (let i = 0; i < niz2.length; i++) {
//   if (!niz.includes(niz2[i])) {
//     niz.push(niz2[i]);
//   }
// }
// console.log(niz);

// brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 95, 84, 67, 24, 0];
// parni = [];
// neparni = [];
// i = 0;
// while (i < brojevi.length) {
//   if (brojevi[i] % 2 === 0) {
//     parni.push(brojevi[i]);
//   } else {
//     neparni.push(brojevi[i]);
//   }
//   i += 1;
// }
// console.log("neparni", neparni);
// console.log("parni", parni);

//10 40 20 30 40 50

// var niz = [10, 20, 30, 40, 50];
// //         0   1  2  3  4  5

// console.log(niz);
// el=niz[0]

// niz.splice(0, 1, niz[3]);
// console.log(niz);

// niz = [
//   ["a", 1, true],
//   ["b", 2, false],
// ];

// nizResenje = [[], [], []];

// for (let i = 0; i < niz.length; i++) {
//   //prolazimo kroz niz 2 elementa
//   for (let j = 0; j < niz[i].length; j++) {
//     //prolazimo kroz pod nizove 3
//     // console.log(niz[i]);
//     //console.log(niz[i][j]);
//     if (typeof niz[i][j] === "string") {
//       //ukoliko je pod niz string uradii
//       nizResenje[0].push(niz[i][j]);
//       //
//     } else if (typeof niz[i][j] === "number") {
//       nizResenje[1].push(niz[i][j]);
//     } else if (typeof niz[i][j] === "boolean") {
//       nizResenje[2].push(niz[i][j]);
//     }
//   }
// }
// console.log(nizResenje);
//

// niz = [1, "c", 3, "e", "b", 2];
// niz1 = [];

// for (let i = 0; i < niz.length; i++) {
//   //   console.log(niz[i]);
//   if (Number(niz[i])) {
//     niz1.unshift(niz[i]);
//   } else if (String(niz[i])) {
//     niz1.push(niz[i]);
//   }
// }
// console.log(niz1);

// function capitaliseString() {
//   //napravimo funkciju i damo joj ime
//   let fox = "the quick brown fox";
//   //napravimo varijablu za datu recenicu
//   fox = fox.split(" ");
//   //uz pomoc split funkcije napravimo niz ciji su elemnti po jedna rec stringa
//   for (let i = 0; i < fox.length; i++) {
//     //uz pomoc for petlje prodjemo kroz niz
//     let rec = fox[i];
//     //pravimo novu varijablu u kojoj cemo smestiti sve reci
//     console.log(rec);
//     //ispisemo sve reci jednu ispod druge
//     rec = rec.split("");
//     //svako slovo od reci odvojimo kao poseban element niza
//     // ['t', 'h', 'e']
//     rec[0] = rec[0].toUpperCase();
//     //svaki prvi indeks (0), svako prvo slovo postaje veliko
//     rec = rec.join("");
//     //spojimo
//     fox[i] = rec;
//   }
//   fox = fox.join(" ");

//   console.log(fox);
// }

// capitaliseString();

// function zbirNovcica(){
// let coins=[25,10,5,2,1];
// let money=46;
// for (let i = 0; i <coins.length; i++) {
//   const element = coins[i];

// }
// if (money>=coins[i]) {
//   ostatak=(money-coins[i]);

// }else{coins.shift()}

// }

// function zbirNovcica ()

//
//   console.log()
// function ime(name) {
//   console.log("Vase ime je:", name);
// }
// unos = prompt("Unesite vase ime:");

// ime(unos);

// function bmi(weight, height){
//   bmi = weight/height**2
//   if (bmi<=18.5){
//   return "Underweight";
//   }else if(bmi<=25.0){
//   return "Normal"
//   }else if(bmi<=30.0){
//   return "Overweight"
//   }else if(bmi>30){
//   return "Obese"
//   }

// arr = [1, 3, 5];
// for (let i = arr.length - 1; i >= 0; i++) {
//   nArr = arr[i];
// }
// console.log(Math.max(arr[i]));

// function array(niz) {
//   max = niz[0];
//   for (el of niz) {
//     if (Math.abs(max) <= Math.abs(el)) {
//       max = el;
//     }
//   }
//   console.log(max);
// }
// array([1, 22, 33, 445, 58758]);

// niz = [58, "", "abcd", true, null, false, 0];

// niz1 = [];

// for (let i = 0; i < niz.length; i++) {
//   //   console.log(niz[i]);
//   if (Boolean(niz[i])) {
//ukoliko su el pod indexom 0,1,2,3,4,5,6 u boolean
//     niz1.push(niz[i]);
//   }
// }
// console.log(niz1);

// for (var x = 0; x < 4; x++) {
//   //prolazimo kroz niz od 0 do 44
//   //0       1       2       3
//   //vrednost x se zadrzava dok se unutrasnja for petlja ne izvrsi cela
//   for (var j = 0; j < 4; j++) {
//     //prolazimo kroz unutrasnju for petlju, moze biti i da prolazimo kroz pod niz
//     //vrednost j se ne menja vec se svaki put ispisuje od 0 do 44
//     //0      1        2        3
//     console.log("x: " + x + ", j: " + j);
//     //ispisujemo:
//     //x zadrzava vrednost 0 sve dok u potpunosti ne prodjemo kroz unutrasnju for petlju
//     // 0=0
//     // 0=1
//     // 0=2
//     // 0=3
//     //0 se ispisuje 4 puta jer nije promenila vrednost itd...
//   }
// }
// data = [3, 0, 24, 54, 0, 123, 0, 32, 63];

// function find(niz) {
//   for (let i = 0; i < niz.length; i++) {
//     if (niz[i] === 0) {
//       niz.splice(i, 1);
//       niz.push(0);
//     }
//   }
//   console.log(niz);
// }
// find(data);

// data = [3, 24, 54, 123, 32, 63];

// function avarage(niz) {
//   sum = 0;
//   for (el of niz) {
//     sum += el;
//   }
//   console.log(Math.ceil(sum / niz.length));
// }
// avarage(data);

// function oneszeros() {
//   //napravimo funkciju, kojoj dajemo ime, bez promenljivog argumenta
//   data = [3, 0, 24, 1, 54, 0, 123, 1, 32, 63];
//   //dati niz
//   for (i = 0; i < data.length; i++) {
//     //uz pomoc for petlje prolazimo kroz niz
//     if (data[i] === 0) {
//       //ukoliko je neki broj iz datog niza jedna nuli sledi...
//       data.splice(i, 1);
//       //iz tog niza pod nekim indeksom brisemo nule, sledi...
//       data.push(0);
//       //ponovo te nule dodamo u niz ali na kraju niza
//     } else if (data[i] === 1) {
//       //u slucaju da se u datom nizu nalazi jedinica...
//       data.splice(i, 1);
//       //brisemo te jedinice iz niza, odnosno izvlacimo ih, i...
//       data.unshift(1);
//       //te jedinice dodajemo na pocetak niza
//     }
//   }

//   console.log(data);
//   //ispisujemo niz
// }

// oneszeros();

//pozivamo funkciju

//justacoding blog

//   data=[1,2,3,4,5,6]
//  data.forEach(()=>{
//    console.log('Hello world');

// data = [1, 2, 3, 4, 5, 6];
// novi = data.map((el, i) => {
//   return el + i;
// });
// console.log(data);
// console.log(novi);

// data = [1, 2, 3, 4, 5, 6];
// novi = data.filter((el) => {
//   return el > 3;
// });
// console.log(data);
// console.log(novi);

// data = [1, 2, 3, 4, 5, 6];
// novi = data.some((el) => {
//   return el > -3;
//   //da li su svi veci od
// });
// console.log(novi);

// data = [1, 2, 3, 4, 5, 6];
// novi = data.map((el, i) => {
//   if (el > 3) {
//     return i;
//   }
//   //da li su svi veci od
// });
// console.log(novi);

// data = ["a", "b", "c", "d"];
// console.log(data.indexOf("b"));

//---------------------------------------------------------------------------------------------------
// pop-uklanja zadnji
// shift-uklanja prvi element
// unshift-dodaje na pocetak
// push-dodaje element na kraj
//splice metoda-pocinje od indeksa, brise n elementa, menjamo ga sa elementima, ima 3 argumenta
//slice- ide od tog indeksa do nekog indexa 0,3, uzima parce iz niza, stavljamo u novu varijablu
//typeOf-daje tip elementa
//includes-sadrzi, da li se u nizu nalazi
//join- clg(el.join())-metoda niza, povezuje elemente
//split- metoda stringa, razdvaja elemente
//funkcije- 'pod program' , kad se nesto ponavlja koristimo funkcije, pozivamo taj pod porgram kad hocemo,
//argumenti-funkcija, da delovu funkcije budu promenljivi
//tipovi podataka- primitivni i referntni
//of-u nizu, for petlji
//map-vraca niz iste duzine, mora da bude isti lenght
//lastIndexOf-daje nam indekse
//data.find- vraca prvi elemnt koji ispunjava ovaj uslov
//data.map- primeni funkciju i vrati novi niz;
//data.filter-dobija funkciju,  na osnovu uslova on nama taj el vraca;
//data.every-saljemo funkciju, vraca nam da li svi el u nizu ispunjavaju uslov true/false
//data. some-da li barem jedan ispunjava niz
//forEach-metoda niza-dobija funkciju-kao for petlja-za svaki element izvrsi ovu funkciju
//algoritam-sort

//3 nacina pisanja funkcija
//deklaracija funkcija function say(){}
//varijabla funkcija a=function (){}    a()
//b=()=>{}-arrow funtion
// //forEach-
// data=[1,2,3,4,5,6]
// data.forEach(function(){
//   console.log('Hello world');
// }) -ovde su funkcija direktno izvrsava
//prvi argument nam je vrednost 1,2,3,4,5,6,
//drugi argument- i-indeksi
//treci argument-daje nam ceo array
//for petnja --------for(el of neki el)

// novi = data.every((el) => {});
// console.log(novi);
// data = [2, 5, 34, 65, 43, 52, 98, 23, 66];

// data = [2, 5, 34, 65, 43, 52, 98, 23, 66];

// novi = data.filter((el) => {
//   return el % 2 === 0;
// });
// console.log(novi);

// data = [2, 5, 34, 65, 43, 52, 98, 23, 66];

// novi = data.some((el) => {
//   return el > 90;
// });
// console.log(novi);

//pozicione varijable

// function sf (arg1, ARG2, arg3){
// console.log(arg);
// }

// function sf (adas, axsaXD, 36454)

// function sf (arg1, ARG2, arg3){
//     console.log(arg);
//     }

//    var1=  function sf (adas, axsaXD, 36454)
//    console.log(var1);

// function arg(n) {
//   pomArr = [];
//   for (let i = 0; i <= n; i++) {
//     pomArr.push(2 ** i);
//   }

//   return pomArr;
// }
// rez = arg(3);
// console.log(rez);

// function reverseSeq(n) {
//   pArr = [];
//   for (let i = n; i > 0; i--) {
//     pArr.push(i);
//   }
//   return pArr;
// }

// // rez = reverseSeq(4);
// // console.log(rez);
// console.log(reverseSeq(4));

// function iceBrickVolume(radius, bottleLength, rimLength) {
//   var duzina = bottleLength - rimLength;
//   var dubina = radius * 2;
//   var visina = radius;

//   return duzina * dubina * visina;
// }

// arr = [1, 1, 1, 3, 1, 1];
// arrNew = [];

// for (let i = 0; i < arr.length; i++) {

//   // console.log(arr[i]);
// }

// function stray(numbers) {
//   num = 0;
//   if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
//     num = numbers[0];
//   }

//   if (
//     numbers[numbers.length - 1] !== numbers[numbers.length - 2] &&
//     numbers[numbers.length - 1] !== numbers[numbers.length - 3]
//   ) {
//     num = numbers[numbers.length - 1];
//   }

//   for (let i = 1; i < numbers.length - 1; i++) {
//     if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
//       num = numbers[i];
//       break;
//     }
//   }
//   return num;
// }
// console.log(stray([1, 1, 1, 1, 1, 1, 2, 2]));

// function largestPairSum(numbers) {
//   if (numbers[0] > numbers[1]) {
//     //ukoliko je br pod indexom 0 veci od br pod indexom 1
//     let first = numbers[0];
//     //pravimo varijablu prvi koja ima vrednost broja sa prvog indexa
//     let second = numbers[1];
//     //pravimo varijablu drugi koja ima vrednost broja sa drugog indexa
//   }
//   //u slucaju da nije veci
//   else {
//     first = numbers[1];
//     //pravimo varijablu prvi koja ima vrednost broja sa drugog indexa
//     second = numbers[0];
//     //pravimo varijablu drugi koja ima vrednost broja sa prvog indexa
//   }
//   for (
//     let i = 2;
//     i < numbers.length;
//     i++
//   ) //prolazimo kroz niz i trazimo dva najveca broja od ostatka niza
//   {
//     if (numbers[i] > first) {
//       //ukoliko je trenutni element sa indexom i veci od prvog
//       second = first;
//       first = numbers[i];
//     } else if (numbers[i] > second && numbers[i] != first)
//       //ukoliko nam je niz po indexom i veci od drugog broja
//       second = numbers[i];
//   }
//   return first + second;
// // }
// for (let i = 1; i < numbers.length - 1; i++) {
//   //     if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
//   //       num = numbers[i];
//   //       break;
//   //     }
//   //   }

// arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

// arrNew = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j >= 0; j--) {
//     if (arr[j] < arr[j - 1]) {
//       let pomVar = arr[j];
//       arr[j] = arr[j - 1];
//       arr[j - 1] = pomVar;
//     } else {
//       break;
//     }
//   }
// }
// console.log(arr[arr.length - 1] + arr[arr.length - 2]);

// function nbYear(p0, percent, aug, p) {
//   var rez = 0; //rez var
//   while (p0 < p) {
//     //sve dok je p0(populacija na pocetku godine) manje od p (populacija)
//     p0 = p0 + (p0 * percent) / 100 + aug;
//     //populacija na pocetku god = ppg+ppg*procenat rasta populacije...
//     rez++;
//     //uvecavaj rez
//   }
//   return rez;
//   //vrati rez
// }

// function openOrSenior(data){
//   return data.map(function(d){
//     return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
//   });
// }

// function openOrSenior(data){
//   var result = [];
//   data.forEach(function(member) {
//     if(member[0] >= 55 && member[1] > 7) {
//       result.push('Senior');
//     } else {
//       result.push('Open');
//     }
//   })
//   return result;
// }

// function openOrSenior(data){
//   pomVar=[]
// for (let i = 0; i < data.length; i++) {
//   if(data[i][0]>55 && data){

//   }
// }
// }
//insertion sort

//iife
//objekti-grupisanje odredjenih log vrednosti
//cuvamo adresu referencu

// Object.keys
// // object.values
// covek1 = {
//   name: "Munevera",
//   surname: "Plojovic",
//   job: function () {
//     console.log("Neki tekst");
//   },
//   location: {
//     city: "Np",
//   },
// };
// console.log(covek1);
// covek1.job();
// covek2 = { ...covek1 };
// //uzima propertije i vrednosti covek1
// console.log(covek1.location.city);

// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// console.log(Object.keys(student));
// //-------------------------------------------------------
// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];
// for (let i = 0; i < library.length; i++) {
//   if (library[i].readingStatus) {
//     console.log("procitno je", library[i].readingStatus);
//   } else {
//     console.log("Nije procitano", library[i].readingStatus);
//   }
// }

// book = library[i].readingStatus;
// console.log(library);
// console.log("===========================");
// console.log(library.readingStatus);

// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
// ];

// console.log(library.readingStatus);

// class- ---------------
//obj orijentisano programiranje
//contructor
//istanca klase
//this za istancu

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// c1 = new Car("audo", 534);
// c2 = new Car("mercedes", 354);
// console.log(c1);
// console.log(c2);
//kontruktor je funkcija
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// c1 = new Car("audo", 534);
// c2 = new Car("mercedes", 354);
// console.log(c1);
// console.log(c2);

// class Cat {
//   constructor(name, year, hair, eyes) {
//     this.name = name;
//     this.year = year;
//     this.hair = hair;
//     this.eyes = eyes;
//   }
// }

// c1 = new Cat("Kiki", 2, "brown", "blue");
// c2 = new Cat("Lila", 1.5, "grey", "black");

// console.log(c1);
// console.log(c2);

//objekat
//napravimo drugi objekat
//zamenimo

// n1 = {
//   name: "Munevera",
//   surname: "Plojovic",
// };
// n2 = {};
// // n1 = Object.keys(n2);
// // n2 = Object.values(n1);

// // console.log(Object.keys);
// // console.log(Object.values);
// // console.log(Object.entries);
// //niz podnizova
// //object.entries
// let q = Object.entries(n1);
// for (let i = 0; i < q.length; i++) {
//   console.log(q[i]);
//   n2[q[i][1]] = q[i][0];
// }
// console.log(n1);
// console.log(n2);

// function pr() {}

//if property surnam se nalazi u datom objektu

// -------------------------------------------

//---------------------------------------------------------------------------------------------
//klasa sa konstruktorom

// class BookList {
//   constructor(bookRead, notReadBook,nextBook, currentBook, lastBook)
//   {
//     this.bookRead = bookRead ;
//     this.notReadBook = notReadBook ;
//     this.nextBook = nextBook ;
//     this.currentBook = currentBook ;
//     this.lastBook = lastBook ;

//   }}
//   Books= ["knjiga1", "knjiga2", "knjiga3"  ]
//   var1= new Book ()
//   constructor(title, genre, author, read, readDate) {
//   this.title = title ;
//   this.genre = genre;
//   this.author = author ;
//   this.read = read;
//   this.readDate = new Date(readDate);
//   }
// unosKnjiga = String(prompt("Unesite knjigu:"));
// unosAutor = String(prompt("Unesite autora:"));
// console.log("Knjiga koju ste uneli je:", unosKnjiga);
// console.log("Autor vase knjige je:", unosAutor);

// // currentBook (Books){
// //   if (!typeof books == "array") {
// //     books = false
// //   }}
// //   this.bookShelf = books || 'array'

// //   if (this.bookShelf.length > 0) {
// //   }
// //kada se unese knjiga, knjigu ubacujemo u niz sa knjigama koje vec imamo
// //ukoliko se uneta knjiga nalazi u nizu, ispisacemo da je knjiga vec procitana
// //ukoliko uneta knjiga se nalazi u nizu2, i nije procitana, ispisujemo knjiga jos uvek nije procitana
// //ukoliko se uneta knjiga ne nalazi u oba niza, postavljamo pitanje da li zelite da dodate knjigu na listu
// //po zavrsetku programa, ispisujemo listu procitanih, listu ne procitanih, i listu novih knjiga
// //takodje izbacujemo listu autora, zanr

//------------------------------------------------------

// class Book{
//     constructor(title, genre, author){
//     this.title = title;
//     this.genre = genre;
//     this.author = author;
//     this.read= false;
//     this.read_date= null;
//     }
// }

// class BookList{
//     constructor(){
//         this.book_read= 0
//         this.book_not_read=0
//            //this.book_not_read= this.bookShelf.length - this.book_read
//         this.nextBook=null
//         this.currBook=null
//         this.lastBook=null
//         this.bookShelf= []
//     }
// }

// add(book) {
//     if (book instanceof Book) {
//         //obj klase book
//         this.bookShelf.push(book)
//     } if (!this.currBook){
//         for (let i = 0; i < this.bookShelf.length; i++) {
// if(!this.bookShelf[i].read){
//     this.currBook=this.bookShelf[i]
//     if(this.bookShelf[i+1]){
//         this.nextBook=this.bookShelf[i+1]
//     }else{
//         this.nextBook=null
//     }
//     break
// }
// }
// }
// }
//     else {
//         console.log("invalid");
//     }
// }

// finishCurrentBook () {
//     for (let i = 0; i < this.bookShelf.length; i++) {
//         const book = this.bookShelf[i];
//         if (book.title === this.currBook.title) {
//             this.bookShelf[i].read=true;
//             this.bookShelf[i].read_date= new Date().now()
//             this.lastBook= this.currBook;
//             this.currBook= this.nextBook;
//         if(this.bookShelf[i+1]) {this.nextBook=this.bookShelf[i+1];
//         }
//         break;
//     }
//  }

// b1= new Book("hp1", "magic", "jkr")
// b2= new Book("hp2", "magic", "jkr")
// b3= new Book("hp3", "magic", "jkr")
// b4= new Book("hp4", "magic", "jkr")
// b5= new Book("hp5", "magic", "jkr")

// bookList.add(b1)
// bookList.add(b2)
// bookList.add(b3)
// bookList.add(b4)
// bookList.add(b5)

class Book {
  constructor(title = "", genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.read_date = null;
  }
}

class BookLists {
  constructor() {
    this.bookShelf = [];
    this.booksRead = 0;
    this.notBooksRead = this.bookShelf.length - this.booksRead;
    this.nextBook = null;
    this.currBook = null;
    this.lastBook = null;
  }

  add(book) {
    if (book instanceof Book) {
      this.bookShelf.push(book);

      for (let i = 0; i < this.bookShelf.length; i++) {
        if (!this.bookShelf[i].read) {
          this.currBook = this.bookShelf[i];
          if (this.bookShelf[i + 1]) {
            this.nextBook = this.bookShelf[i + 1];
          } else {
            this.nextBook = null;
          }
          break;
        }
      }
    } else {
      console.log("Invalid argument type");
    }
  }

  finishCurrentBook() {
    for (let i = 0; i < this.bookShelf.length; i++) {
      const book = this.bookShelf[i];
      if (book.title === this.currBook.title) {
        this.bookShelf[i].read = true;
        this.bookShelf[i].read_date = new Date();
        this.lastBook = this.currBook;
        this.currBook = this.nextBook;
        if (this.bookShelf[i + 1]) {
          this.nextBook = this.bookShelf[i + 2];
        }
        break;
      }
    }
  }
}

b1 = new Book("HP1", "magic", "JKR");
b2 = new Book("HP2", "magic", "JKR");
b3 = new Book("HP3", "magic", "JKR");
b4 = new Book("HP4", "magic", "JKR");
b5 = new Book("HP5", "magic", "JKR");

bl = new BookLists();

bl.add(b1);
bl.add(b2);
bl.add(b3);
bl.add(b4);
bl.add(b5);

console.log(bl.lastBook);
console.log(bl.currBook);
console.log(bl.nextBook);

bl.finishCurrentBook();

console.log("=========================");
console.log(bl.lastBook);
console.log(bl.currBook);
console.log(bl.nextBook);

bl.finishCurrentBook();
bl.finishCurrentBook();
bl.finishCurrentBook();
bl.finishCurrentBook();

console.log("=========================");
console.log(bl.lastBook);
console.log(bl.currBook);
console.log(bl.nextBook);

console.log(bl.bookShelf);
