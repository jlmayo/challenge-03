// Assignment code here
var generateBtn = document.querySelector("#generate");

var numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolChoices = ["*", "&", "^", "%", "$", "#", "@", "!", "~", "{", "}", "?", "<", ">", "."]
var alphaChoicesLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphaChoicesUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]

var passwordLength;
var userSelectsNum;
var userSelectsSym;
var userSelectsLowC;
var userSelectsUppC;

function generatePassword() {

  var userSelect = window.prompt("Please choose a password length.")

  var passwordLength = parseInt(userSelect)

  if (isNaN(passwordLength)) {
    window.alert("That is not a number. Please try again.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8-128 characters.")
    return
  }

  var userSelectsNum = window.confirm("Should this password include numbers?")
  var userSelectsSym = window.confirm("Should this password include symbols?")
  var userSelectsLowC = window.confirm("Should this password include lowercase letters?")
  var userSelectsUppC = window.confirm("Should this password include uppercase letters?")
  

  if (!userSelectsNum && !userSelectsSym && !userSelectsLowC && !userSelectsUppC) {
    window.alert("You must choose a criteria. Please try again.")
  }
   else if (userSelectsNum && userSelectsSym && userSelectsLowC && userSelectsUppC) {
    passwordChoices = character.concat(numberChoices, symbolChoices, alphaChoicesLower, alphaChoicesUpper);
  }
   else if (userSelectsNum && userSelectsSym && userSelectsLowC) {
    passwordChoices = character.concat(numberChoices, symbolChoices, alphaChoicesLower);
  }
   else if (userSelectsNum && userSelectsSym && userSelectsUppC) {
      passwordChoices = character.concat(numberChoices, symbolChoices, alphaChoicesUpper);
  }
  else if (userSelectsNum && userSelectsLowC && userSelectsUppC) {
    passwordChoices = number.concat(numberChoices, alphaChoicesLower, alphaChoicesUpper);
  }
  else if (userSelectsSym && userSelectsLowC && userSelectsUppC) {
    passwordChoices = character.concat(symbolChoices, alphaChoicesLower, alphaChoicesUpper);
  }
  else if (userSelectsNum && userSelectsSym) {
    passwordChoices = character.concat(numberChoices, symbolChoices);
  }
  else if (userSelectsNum && userSelectsLowC) {
    passwordChoices = character.concat(numberChoices, alphaChoicesLower);
  }
  else if (userSelectsNum && userSelectsUppC) {
    passwordChoices = character.concat(numberChoices, alphaChoicesUpper);
  }
  else if (userSelectsSym && userSelectsLowC) {
    passwordChoices = character.concat(symbolChoices, alphaChoicesLower);
  }
  else if (userSelectsSym && userSelectsUppC) {
    passwordChoices = character.concat(symbolChoices, alphaChoicesUpper);
  }
  else if (userSelectsNum) {
    passwordChoices = character.concat(numberChoices);
  }
  else if (userSelectsSym && userSelectsLowC) {
    passwordChoices = character.concat(symbolChoices);
  }
  else if (userSelectsLowC) {
    passwordChoices = character.concat(alphaChoicesLower);
  }
  else if (userSelectsUppC) {
    passwordChoices = character.concat(alphaChoicesUpper);
  };

  var passwordComplete = [];

  for (var i = 0; i < passwordLength; i++) {
    var randomList = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    passwordComplete.push(randomList);
  }

 return passwordComplete.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

