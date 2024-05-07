let user1 = {
  balance: "$1,825.65",
  picture: "https://placehold.it/32x32",
  age: 21,
  name: "Golden Branch",
  gender: "male",
  greeting: "Hello, Golden Branch! You have 7 unread messages.",
  favouriteFruit: "banana",
};

function showSalary(users, age) {
  return users
    .filter((item) => item.age <= age)
    .map((item) => `${item.name}, ${item.balance}`)
    .join("\n");
}
