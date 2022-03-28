// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

// create a global variable called "pwLength" with a number between 10 and 18

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

// ========= ⬇Random password generator code ⬇ ======

let genCharacter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234!)@#$%^&*_(";
let pwLength = 12;
let password = "";
  for (let i = 0; i < pwLength; i++) {
    password += genCharacter.charAt(
      Math.floor(Math.random() * genCharacter.length)
    );
  }
console.log(genCharacter);
