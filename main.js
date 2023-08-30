const container = document.getElementsByClassName("container");
const name2 = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const sign = document.getElementById("sign");

//  store error messages for each input field
const errorMessages = {
  name2: null,
  password: null,
  password2: null,
};

sign.addEventListener("click", () => {
  // Check if name length is valid
  if (name2.value.length < 3 || name2.value.length > 11) {
    if (!errorMessages.name2) {
      errorMessages.name2 = createErrorMessage("length of name must be between 3 and 11");
      name2.parentElement.appendChild(errorMessages.name2);
    }
  } else {
    removeErrorMessage(errorMessages.name2);
  }

  // Check if password length is valid
  if (password.value.length < 6 || password.value.length > 15) {
    if (!errorMessages.password) {
      errorMessages.password = createErrorMessage("length of password must be between 6 and 15");
      password.parentElement.appendChild(errorMessages.password);
    }
  } else {
    removeErrorMessage(errorMessages.password);
  }

  // Check if passwords match
  if (password.value !== password2.value) {
    if (!errorMessages.password2) {
      errorMessages.password2 = createErrorMessage("passwords don't match");
      password2.parentElement.appendChild(errorMessages.password2);
    }
  } else {
    removeErrorMessage(errorMessages.password2);
  }

  if(Object.values(errorMessages).every(message => message === null)) {
    location.replace("https://twitter.com/semih_devv")
  }
 
});

// Function to create an error message element
function createErrorMessage(text) {
  const node = document.createElement("p");
  node.classList.add("wrong");
  node.innerText = text;
  return node;
}

// Function to remove an error message element
function removeErrorMessage(errorMessage) {
  if (errorMessage) {
    errorMessage.remove();
    errorMessage = null;
  }
}
