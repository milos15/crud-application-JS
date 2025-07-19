window.onload = function () {
  let firstName = document.getElementById("input-first-name");
  let lastName = document.getElementById("input-last-name");
  let age = document.getElementById("input-age");
  const button = document.getElementById("btn-button");

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
    const trBody = document.createElement("tr");

    trBody.innerHTML = `
      <td>${firstNameValue}</td>
      <td>${lastNameValue}</td>
      <td>${ageValue}</td> 
    `;

    // Creating Action Column
    const action = document.createElement("td");

    // Delete Table
    // Create delete button
    const deleteBtn = document.createElement("button");
    // Give the button text
    deleteBtn.textContent = "Delete";
    // CSS Style -> red background
    deleteBtn.classList.add("btn-delete");
    // Delete Table
    deleteBtn.onclick = function () {
      table.remove();
    };

    // Update Table
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.classList.add("btn-edit");

    updateBtn.onclick = function () {
      // Remember the row we want to update
      const updateRow = trBody;

      // Insert current values into the inputs
      firstName.value = updateRow.children[0].textContent;
      lastName.value = updateRow.children[1].textContent;
      age.value = updateRow.children[2].textContent;

      // Setting the Submit button functionality to update the current input values
      button.onclick = function () {
        updateRow.children[0].textContent = firstName.value;
        updateRow.children[1].textContent = lastName.value;
        updateRow.children[2].textContent = age.value;

        // Clearing inputs
        firstName.value = "";
        lastName.value = "";
        age.value = "";

        // Setting the Submit button its original functionality
        button.onclick = addTable;
      };
    };

    // Appending Elements
    action.append(updateBtn);
    action.appendChild(deleteBtn);

    trBody.append(action);

    tbody.appendChild(trBody);
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
