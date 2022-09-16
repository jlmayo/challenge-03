// Assignment code here
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

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
  // making a request for USER input
  var userSelect = window.prompt("Please choose a password length.")
  // we are parsing the input (converting the input to what we want to work with)
  var passwordLength = parseInt(userSelect)

  // validation (are we getting what we expect)
  if (isNaN(passwordLength)) {
    window.alert("That is not a number. Please try again.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8-128 characters.")
    return
  }

  // gathering more USER data (TRUE or FALSE)
  var userSelectsNum = window.confirm("Should this password include numbers?")
  var userSelectsSym = window.confirm("Should this password include symbols?")
  var userSelectsLowC = window.confirm("Should this password include lowercase letters?")
  var userSelectsUppC = window.confirm("Should this password include uppercase letters?")
  
  // Data Container 
  var passwordChoices = "";

  if (!userSelectsNum && !userSelectsSym && !userSelectsLowC && !userSelectsUppC) {
    window.alert("You must choose a criteria. Please try again.");
    return
  }
   else if (userSelectsNum && userSelectsSym && userSelectsLowC && userSelectsUppC) {
    passwordChoices = passwordChoices.concat(numberChoices, symbolChoices, alphaChoicesLower, alphaChoicesUpper);
    console.log(passwordChoices);
  }
   else if (userSelectsNum && userSelectsSym && userSelectsLowC) {
    passwordChoices = passwordChoices.concat(numberChoices, symbolChoices, alphaChoicesLower);
  }
   else if (userSelectsNum && userSelectsSym && userSelectsUppC) {
      passwordChoices = passwordChoices.concat(numberChoices, symbolChoices, alphaChoicesUpper);
  }
  else if (userSelectsNum && userSelectsLowC && userSelectsUppC) {
    passwordChoices = passwordChoices.concat(numberChoices, alphaChoicesLower, alphaChoicesUpper);
  }
  else if (userSelectsSym && userSelectsLowC && userSelectsUppC) {
    passwordChoices = passwordChoices.concat(symbolChoices, alphaChoicesLower, alphaChoicesUpper);
  }
  else if (userSelectsNum && userSelectsSym) {
    passwordChoices = passwordChoices.concat(numberChoices, symbolChoices);
  }
  else if (userSelectsNum && userSelectsLowC) {
    passwordChoices = passwordChoices.concat(numberChoices, alphaChoicesLower);
  }
  else if (userSelectsNum && userSelectsUppC) {
    passwordChoices = passwordChoices.concat(numberChoices, alphaChoicesUpper);
  }
  else if (userSelectsSym && userSelectsLowC) {
    passwordChoices = passwordChoices.concat(symbolChoices, alphaChoicesLower);
  }
  else if (userSelectsSym && userSelectsUppC) {
    passwordChoices = passwordChoices.concat(symbolChoices, alphaChoicesUpper);
  }
  else if (userSelectsNum) {
    passwordChoices = passwordChoices.concat(numberChoices);
  }
  else if (userSelectsSym && userSelectsLowC) {
    passwordChoices = passwordChoices.concat(symbolChoices);
  }
  else if (userSelectsLowC) {
    passwordChoices = passwordChoices.concat(alphaChoicesLower);
  }
  else if (userSelectsUppC) {
    passwordChoices = passwordChoices.concat(alphaChoicesUpper);
  };

  // Look into using a SWITCH method
  // switch(function(input) {
        // case(numberChoices):
            // run method X
  //})

  // Self validation that we are getting the result we expect
  console.log(passwordChoices);  // [1, 2, 3, 4, 5, 6, 7]  --> "1,2,3,4,5,6"
  console.log(typeof passwordChoices);
  // convert this STRING into and ARRAY (datatype converstion)
  // passwordChoices.split(",");
  var choicesArr = passwordChoices.split(",");
  console.log(choicesArr);
  console.log(typeof choicesArr);


  // Finale dataset container
  var passwordComplete = [];  //  --> ["a", "5", "Q", "%"];

  // making sure we gather enough values , that the USER requested
  for (var i = 0; i < passwordLength; i++) {
    var randomList = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    passwordComplete.push(randomList);
  }

  // Turning our result Array into a STRING 
 return passwordComplete.join("");    // --> "a5Q%"
}

// Write password to the #password input
function writePassword() {
  // finding a result
  var password = generatePassword();
  // grabbing reference to an HTML element
  var passwordText = document.querySelector("#password");
  // updating the DOM (the HTML)
  //passwordText.textContent(password);
  passwordText.textContent = password;
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);