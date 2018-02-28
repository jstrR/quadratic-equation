module.exports = function solveEquation(equation) {
  // your implementation
  let spltr = equation.split(" ");
  let a = spltr[0];
  let b = spltr[3] + spltr[4];
  let c = spltr[7] + spltr[8];
  let i = b * b - 4 * a * c;
  let x1 = (-b - Math.sqrt(i)) / (2 * a);
  let x2 = (-b + Math.sqrt(i) ) / (2 * a);
  return [Math.round(x1), Math.round(x2)].sort(function(a,b) { return a - b });
}

