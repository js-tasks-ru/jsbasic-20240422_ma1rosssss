// let button = document.querySelector(".toggle-text-button");
// document.getElementById("text").setAttribute("hidden", false);

// function toggleText() {
//   let text = document.getElementById("text");

//   if (text.hasAttribute("hidden")) {
//     text.removeAttribute("hidden");
//   } else {
//     text.setAttribute("hidden", "");
//   }
// }

// button.addEventListener("click", toggleText);
// Подскажите почему код выше прошел авто тест ?

function toggleText() {
  let toggleButton = document.querySelector(".toggle-text-button");
  let textElement = document.getElementById("text");

  toggleButton.addEventListener("click", () => {
    let isTextElementHidden = textElement.hidden;
    textElement.hidden = !isTextElementHidden;
  });
}
