window.onload = function () {
  const firstName = document.getElementById("input-first-name");
  const lastName = document.getElementById("input-last-name");
  const age = document.getElementById("input-age");
  const button = document.getElementById("button");

  function addTable() {
    // Getting Values
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const ageValue = age.value;

    // Preventing empty inputs
    if (!firstNameValue || !lastNameValue || !ageValue) {
      alert("Please fill out all the fields! ");
      return;
    }

    // Table
    const table = document.createElement("table");
    table.classList.add("table");

    // Thead --> Static Hardcoded Content
    const thead = document.createElement("thead");
    thead.innerHTML = `
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Years</th>
      <th>Action</th>
    </tr>
    `;

    table.append(thead);

    // Tbody --> Dynamic Content
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${firstNameValue}</td>
      <td>${lastNameValue}</td>
      <td>${ageValue}</td>
      <td>
        <button id="btn-edit">Edit</button>
        <button id="btn-delete">Delete</button>
      </td>
    `;

    tbody.appendChild(tr);
    table.appendChild(tbody);

    // Adding to Dynamic Content
    document.querySelector(".dynamic-content").appendChild(table);

    // Clearing inputs
    firstName.value = "";
    lastName.value = "";
    age.value = "";
  }

  button.addEventListener("click", function () {
    addTable();
  });
};
