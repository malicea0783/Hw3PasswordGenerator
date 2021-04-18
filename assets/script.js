const lowerCaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let characterBank = [];

  let storeChars = window.prompt("How many Characters? Choose between 8 - 128");
  while (storeChars < 8 || storeChars > 128) {
    storeChars = prompt("hey dummy! 8-128!!!");
  }

  var lowerCaseCheck = confirm("would you like to use lower case letters?");
  var upperCaseCheck = confirm("would you like to use upper case letters?");
  var numberCheck = confirm("would you like to use numbers?");
  var specialCheck = confirm("would you like to use special charaters?");
  var requiredChars = [];
  
  if (lowerCaseCheck === true) {
    requiredChars.push(getRandom(lowerCaseChars));
    characterBank = characterBank.concat(lowerCaseChars);
  }
  if (upperCaseCheck === true) {
    requiredChars.push(getRandom(upperCaseChars));
    characterBank = characterBank.concat(upperCaseChars);
  }
  if (numberCheck === true) {
    requiredChars.push(getRandom(numberChars));
    characterBank = characterBank.concat(numberChars);
  }
  if (specialCheck === true) {
    requiredChars.push(getRandom(specialChars));
    characterBank = characterBank.concat(specialChars);
  }
  let remainingPasswordLength = storeChars - requiredChars.length;
  for (let i = 0; i < remainingPasswordLength; i++) {
    requiredChars.push(getRandom(characterBank));
  }
  return requiredChars.join("");

}

function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
