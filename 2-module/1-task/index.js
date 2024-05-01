let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: "December",
  currency: "USD",
  isPayed: false,
};

function sumSalary(salaries) {
  let sum = 0;
  for (let i in salaries) {
    if (typeof salaries[i] === "number" && isFinite(salaries[i])) {
      sum += salaries[i];
    }
  }
  return sum;
}

sumSalary(salaries);
