// Assignment code here
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var random = Math.random()
  return Math.floor(min*(1 - random) + random*max)
}

function passwordItems(list) {
  return list[randomInt(0, list.length-1)]
}

function generatePassword() {

  var userSelect = window.prompt("Please choose a password length.")

  var passwordLength = parseInt(userSelect)

  if (isNaN(passwordLength)) {
    window.alert("That is not a number.")
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

  var numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolChoices = ["*", "&", "^", "%", "$", "#", "@", "!", "~", "{", "}", "?", "<", ">", "."]
  var alphaChoicesLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var alphaChoicesUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]

  var passwordChoices = []

  if (userSelectsNum) {
    passwordChoices.push(numberChoices)
  }

  if (userSelectsSym) {
    passwordChoices.push(symbolChoices)
  }

  if (userSelectsLowC) {
    passwordChoices.push(alphaChoicesLower)
  }

  if (userSelectsUppC) {
    passwordChoices.push(alphaChoicesUpper)
  }

  var passwordComplete = ""


  for (var i = 0; i < passwordLength; i++) {
    var passwordResult = passwordItems(passwordChoices)
    var passwordRandom = passwordItems(randomItems)
    passwordComplete += passwordRandom
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

