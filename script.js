// Hobby Feature
const list = document.querySelector("#hobby-list");
const input = document.querySelector("#hobby-input");
const btn = document.querySelector("#add-hobby-btn");

function createDeleteButton(li) {
  const del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "delete-btn";
  del.setAttribute("aria-label", "Delete hobby");

  del.onclick = () => li.remove();
  li.appendChild(del);
}

document.querySelectorAll("#hobby-list li").forEach(createDeleteButton);

btn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement("li");
  li.textContent = value;

  createDeleteButton(li);
  list.appendChild(li);

  input.value = "";
});

// Form Validation (Inline)
const form = document.querySelector("#contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Clear previous errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  if (!name) {
    document.getElementById("name-error").textContent = "Name is required";
    valid = false;
  }

  if (!email || !email.includes("@")) {
    document.getElementById("email-error").textContent = "Valid email required";
    valid = false;
  }

  if (!message) {
    document.getElementById("message-error").textContent =
      "Message cannot be empty";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// Live Time
const time = document.querySelector("#time");

function updateTime() {
  const now = new Date();

  time.textContent = now.toLocaleString("en-IN");
}

updateTime();
setInterval(updateTime, 1000);
