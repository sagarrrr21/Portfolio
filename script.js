const hobbyList = document.querySelector("#hobby-list");
const hobbyInput = document.querySelector("#hobby-input");
const addHobbyBtn = document.querySelector("#add-hobby-btn");

/**
 * Creates and attaches a delete button to a list item
 * @param {HTMLElement} listItem
 */
function addDeleteButton(listItem) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.type = "button";
  deleteBtn.setAttribute("aria-label", `Delete: ${listItem.textContent}`);

  // Event listener for delete functionality
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(deleteBtn);
}

// Add delete buttons to existing hobby list items
document.querySelectorAll("#hobby-list li").forEach((listItem) => {
  addDeleteButton(listItem);
});

/**
 * Adds a new hobby benefit to the list
 */
function addHobbyBenefit() {
  const value = hobbyInput.value.trim();

  // Validate: Don't add empty items
  if (value === "") {
    hobbyInput.focus();
    return;
  }

  // Create new list item
  const newListItem = document.createElement("li");
  newListItem.textContent = value;
  addDeleteButton(newListItem);
  hobbyList.appendChild(newListItem);

  hobbyInput.value = "";
  hobbyInput.focus();
}

// Event listener for Add button click
addHobbyBtn.addEventListener("click", addHobbyBenefit);

// Event listener for Enter key press in input
hobbyInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addHobbyBenefit();
  }
});

const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

/**
 * Validates email format using regex
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * @param {HTMLElement} input
 * @param {HTMLElement} errorElement
 * @param {string} message
 */
function showError(input, errorElement, message) {
  input.classList.add("error");
  errorElement.textContent = message;
  input.setAttribute("aria-invalid", "true");
}

/**

 * @param {HTMLElement} input 
 * @param {HTMLElement} errorElement
 */
function clearError(input, errorElement) {
  input.classList.remove("error");
  errorElement.textContent = "";
  input.setAttribute("aria-invalid", "false");
}

/**
 *
 * @returns {boolean}
 */
function validateForm() {
  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === "") {
    showError(nameInput, nameError, "Please enter your name");
    isValid = false;
  } else {
    clearError(nameInput, nameError);
  }

  // Validate email
  if (emailInput.value.trim() === "") {
    showError(emailInput, emailError, "Please enter your email");
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, emailError, "Please enter a valid email address");
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }

  // Validate message
  if (messageInput.value.trim() === "") {
    showError(messageInput, messageError, "Please enter your message");
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(
      messageInput,
      messageError,
      "Message should be at least 10 characters long",
    );
    isValid = false;
  } else {
    clearError(messageInput, messageError);
  }

  return isValid;
}

// Real-time validation: Clear errors as user types correctly
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    clearError(nameInput, nameError);
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() !== "" && isValidEmail(emailInput.value.trim())) {
    clearError(emailInput, emailError);
  }
});

messageInput.addEventListener("input", () => {
  if (
    messageInput.value.trim() !== "" &&
    messageInput.value.trim().length >= 10
  ) {
    clearError(messageInput, messageError);
  }
});

// Form submission handler
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validate form before showing alert
  if (validateForm()) {
    alert("Form submitted successfully!");

    contactForm.reset();

    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);
  }
});

const timeElement = document.querySelector("#time");

function updateDateTime() {
  const now = new Date();

  // Format date: Monday, 17 March 2026
  const dateOptions = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formattedDate = now.toLocaleDateString("en-IN", dateOptions);

  // Format time: HH:mm:ss (24-hour format)
  const formattedTime = now.toLocaleTimeString("en-IN", {
    hour12: false,
  });

  // Combine and display in the required format
  timeElement.textContent = `${formattedDate}, ${formattedTime}`;
}

// Initial call to display time immediately on page load
updateDateTime();

// Update time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
