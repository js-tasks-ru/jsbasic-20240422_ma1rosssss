let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((arr) => arr >= a && arr <= b);
}

let filtered = filterRange(arr, 1, 4);
