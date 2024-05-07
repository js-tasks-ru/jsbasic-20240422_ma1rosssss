const inputData = "1 и -5.8 или 10 хотя 34 + -5.3 и 73";
let result = {};

function getMinMax(str) {
  let num = str.split(" ");
  let number = num.filter((item) => {
    return !isNaN(item) && item !== "";
  });

  let min = Math.min(...number);
  let max = Math.max(...number);

  result.min = min;
  result.max = max;
  return result;
}
console.log(getMinMax(inputData));
