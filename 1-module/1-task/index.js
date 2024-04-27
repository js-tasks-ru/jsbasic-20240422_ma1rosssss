function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    console.log(i);
    result *= i;
  }

  return result;
}
