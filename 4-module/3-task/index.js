function highlight(table) {
  const rows = table.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const status = row.querySelector("td[data-available]");
    if (status) {
      if (status.getAttribute("data-available") === "true") {
        row.classList.add("available");
      } else {
        row.classList.add("unavailable");
      }
    } else {
      row.hidden = true;
    }

    const gender = row.querySelector("td:nth-child(3)");

    if (gender) {
      if (gender.textContent === "m") {
        row.classList.add("male");
      } else {
        row.classList.add("female");
      }
    }

    const age = row.querySelector("td:nth-child(2)");
    if (age.textContent < 18) {
      row.style = "text-decoration: line-through";
    }
  });
}
