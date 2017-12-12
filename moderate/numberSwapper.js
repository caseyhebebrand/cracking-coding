// Write a funciton to swap a number in place without temporart variables.
const numSwapper = (a, b) => {
  a = a - b;
  b = b + a;
  a = b - a;
  return [a, b];
}
