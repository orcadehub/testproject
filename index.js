function fun() {
  const table = document.getElementById("userTable");
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill all fields");
    return;
  }

  // Get users array from localStorage or initialize empty array
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Add new user object
  users.push({ name, email, phone });

  // Save back to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Render table from localStorage data
  renderTable();
  
  // Optionally clear inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function renderTable() {
  const table = document.getElementById("userTable");
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Build table rows from user data
  table.innerHTML = users.map(user => 
    `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.phone}</td></tr>`
  ).join("");
}

// Initial render on page load
renderTable();
