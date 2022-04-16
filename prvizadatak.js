function generatePyramid(n) {
  for (var i = 1; i <= n; i++) {
    arr = [];
    for (var j = 1; j <= i; j++) {
      arr.push(j);
    }
    console.log(arr.join(" ") + "\n");
  }
}
generatePyramid(6);

// -----------------------------

// function transpose(arr, arrLen) {
//   for (var i = 0; i < arrLen; i++) {
//     for (var j = 0; j < i; j++) {}
//   }
// }
// transpose([1, 2, 3, 4, 5, 6], 3);

const transpose = (matrix) => {
  let [row] = matrix;
  return row.map((value, column) => value);
};

// example input
const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
