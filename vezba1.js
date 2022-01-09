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

// while (true) {
//   console.log("lozinka je tacna");
// }

// lozinka = "sifra";
// sifra = prompt("Unesite sifru");

// while (lozinka !== sifra) {
//   sifra = prompt("Unesite ponovo sifru");
// }
// alert("Tacna lozinka");

unos = Number(prompt("Unesite neki broj"));

while (unos < 20 && unos > 10) {
  console.log("Cestitamo pogodili ste");
  break;
}
