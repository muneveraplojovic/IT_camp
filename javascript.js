// a = Number(window.prompt("Unesite neki broj:"));

// for (let i = 1; i < 10; i++) {
//   console.log("bravo", i);
// }
// console.log("uneti broj je:", a);

// a = Number(window.prompt("Unesite neki broj:"));

// if (a >= 10 && a <= 20) {
//   console.log("Odlicno, pogodili ste, vas uneti broj je", a);
// } else if (a < 10 && a < 0) {
//   console.log("Uneli ste broj manji od 10, vas uneti broj je", a);
// } else if (a >= 20) {
//   console.log("uneli ste broj veci od 20");
// }

//pocetna vrednost krajnja vrednost korak//

// for (let i = 0; i < 5; i++) {
//   console.log("ti", i);
//   for (let j = i; j < 2; j++) {
//     console.log("ja", j);
//   }
// }

// var max = 0;
// for (let i = 0; i < 5; i++) {
//   broj = Number(prompt("Unesite broj:"));
//   console.log(broj);

//   if (broj > max) {
//     max = broj;
//   }
// }
// console.log("Max je:");
// console.log(max);

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log("Broj je paran", i);
//   } else {
//     console.log("Broj je neparan", i);
//   }
// }

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

// var broj = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 6 === 0 && i % 7 === 0) {
//     console.log(i, "tik-tak");
//   } else if (i % 6 === 0) {
//     console.log(i, "tik");
//   } else if (i % 7 === 0) {
//     console.log(i, "tak");
//   } else {
//     console.log(i);
//   }
// }

// var suma = 0;
// //pomocna varijabla//
// for (let i = 1; i <= 4; i++) {
//   //ispisace se 1 2 3 4 //
//   fakt = 1;
//   //pomocna varijabla//
//   for (let j = 1; j <= i; j++) {
//     fakt = fakt * j;
//   }
//   console.log(fakt);
//   suma += fakt;
// }
// console.log(suma);

for (let i = 1; i <= 5; i++) {
  console.log(i);
  console.log("");
  for (let j = 1; j <= i; j++) {
    console.log("");
    console.log(j);
  }
}
