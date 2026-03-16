// Hobby Interaction

const list = document.querySelector("#hobby-list");

const input = document.createElement("input");
input.placeholder = "Add new hobby benefit";

const btn = document.createElement("button");
btn.textContent = "Add";

list.after(input);
input.after(btn);

function addDelete(li) {
  const del = document.createElement("button");

  del.textContent = "Delete";
  del.style.marginLeft = "8px";

  del.onclick = () => li.remove();

  li.appendChild(del);
}

document.querySelectorAll("#hobby-list li").forEach((li) => addDelete(li));

btn.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");

  li.textContent = input.value;

  addDelete(li);

  list.appendChild(li);

  input.value = "";
});

// Contact Form

const form = document.querySelector("#contact form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Form submitted successfully!");
});

// Dynamic Footer Date & Time

const time = document.querySelector("#time");

function updateTime() {
  const now = new Date();

  const date = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const clock = now.toLocaleTimeString("en-IN");

  time.textContent = `${date}, ${clock}`;
}

updateTime();

setInterval(updateTime, 1000);
