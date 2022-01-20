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

//justacoding blog
// pop-uklanja zadnji
// shift-uklanja prvi element
// unshift-dodaje na pocetak
// push-dodaje element na kraj
//splice metoda-pocinj eod indeksa, brise n elementa, menjamo ga sa elemtima
//slice- ide od tog indeksa do nekog indexa 0,3
//typeOf

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

for (var x = 0; x < 4; x++) {
  //porlazimo kroz niz od 0 do 44
  //0       1       2       3
  //vrednost x se zadrzava dok se unutrasnja for petlja ne izvrsi cela
  for (var j = 0; j < 4; j++) {
    //prolazimo kroz unutrasnju for petlju, moze biti i da prolazimo kroz pod niz
    //vrednost j se ne menja vec se svaki put ispisuje od 0 do 44
    //0      1        2        3
    console.log("x: " + x + ", j: " + j);
    //ispisujemo:
    //x zadrzava vrednost 0 sve dok u potpunosti ne prodjemo kroz unutrasnju for petlju
    // 0=0
    // 0=1
    // 0=2
    // 0=3
    //0 se ispisuje 4 puta jer nije promenila vrednost itd...
  }
}
