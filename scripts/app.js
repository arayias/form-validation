const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");

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
    regExp: /^\+?3?8?(0\d{9})$/,
    message: "Invalid phone number",
  },
};
