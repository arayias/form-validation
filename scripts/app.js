const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");

inputs = [nameInput, surnameInput, passwordInput, emailInput, phoneInput];

const regExp = {
  name: {
    regExp: /^[a-zA-Z]{2,}$/,
    message: "Name should contain at least 2 alphabetic characters",
  },
  surname: {
    regExp: /^[a-zA-Z]{2,}$/,
    message: "Surname should contain at least 2 alphabetic characters",
  },
  password: {
    regExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    message:
      "Password should contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number",
  },
  email: {
    regExp: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Invalid email",
  },
  phone: {
    regExp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    message: "Invalid phone number",
  },
};

const validateInput = (input, regExp, message) => {
  const inputValue = input.value;
  const inputName = input.name;
  const small = input.nextElementSibling;
  input.classList.add("invalid");
  if (inputValue === "") {
    small.classList.add("active");
    small.classList.remove("removed");
    small.innerText = `${inputName} is required`;
  } else if (!inputValue.match(regExp)) {
    small.classList.add("active");
    small.classList.remove("removed");
    small.innerText = message;
  } else {
    input.classList.remove("invalid");
    small.innerText = "";
    small.classList.remove("active");
    small.classList.add("removed");
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const inputName = input.name;
    const currentRegExp = regExp[inputName].regExp;
    const message = regExp[inputName].message;
    validateInput(input, currentRegExp, message);
    input.addEventListener(
      "blur",
      (e) => {
        const inputName = input.name;
        const currentRegExp = regExp[inputName].regExp;
        const message = regExp[inputName].message;
        validateInput(input, currentRegExp, message);
      },
      { once: true }
    );
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    const inputName = input.name;
    const currentRegExp = regExp[inputName].regExp;
    const message = regExp[inputName].message;
    validateInput(input, currentRegExp, message);
  });

  const invalidInputs = document.querySelectorAll("input.invalid");
  if (invalidInputs.length == 0) {
    form.submit();
  }
});
