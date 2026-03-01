// Hobby Interaction

// select ordered list
const list = document.querySelector("#home ol");

// create input
const hobbyInput = document.createElement("input");
hobbyInput.placeholder = "Enter new hobby benefit";

// create button
const addButton = document.createElement("button");
addButton.textContent = "Add";

// add elements below list
list.after(hobbyInput);
hobbyInput.after(addButton);

// function to create delete button
function createDelete(li) {
  const del = document.createElement("button");
  del.textContent = "Delete";
  del.style.marginLeft = "8px";

  del.onclick = () => li.remove();

  li.appendChild(del);
}

// add delete button to existing items
document.querySelectorAll("#home ol li").forEach((li) => createDelete(li));

// add new item
addButton.addEventListener("click", () => {
  if (hobbyInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = hobbyInput.value;

  createDelete(li);
  list.appendChild(li);

  hobbyInput.value = "";
});

//  Contact Form Alert

const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});

// Dynamic Footer Time

const footer = document.querySelector("footer");
const timeText = document.createElement("p");

footer.appendChild(timeText);

function showTime() {
  const now = new Date();

  const date = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-IN");

  timeText.textContent = `${date}, ${time}`;
}

showTime();
setInterval(showTime, 1000);
