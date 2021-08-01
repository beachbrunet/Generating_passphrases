// Assignment Code
// Great the user and inform them of the 8-128 charectors that will be used.
// Then ask the user how many charectors they would like to be used(prompt)
// Record the input and approve it for the rules stated above. (if else) (8-128)
// Ask user the following: Do you want to use special charectors? Lowercase? Uppercase? Numbers?
// Record the user inputs for all questions for the generator.

// This is the start of the code, letting the user know we are gonna get started with asking the required Q's
alert("Let's get started with your custom password!")


//
    var confirmLength = prompt(" How many Charectors would you like your password to be?");
    if (confirmLength  < 8 || confirmLength > 128) {
    // this is false
    alert("Password length must be between 8 to 128 characters. Try again"); 
} else {
alert ("thats the right ammount!")
}


// The questions per assignment requirements: 
var generateBtn = document.querySelector("#generate");
// Capitalized "Special Charector" in the sentence to show importance when reading, same with other questions. 
// --------------------------------------------------------------------------------------------------
var useSpecialCharectors = confirm("Would you like to use Special Charectors? Click OK to confirm");
var useLowerCase = confirm("Would you like to use Lowercase Letters? Click OK to confirm");
var useUpperCase = confirm("Would you like to use Uppercase Letters Click OK to confirm");
var useNumbers = confirm("Would you like to use Numbers? Click OK to confirm")

var numberChars = ["0" , "2", "3", "4", "5", "6", "7", "8", "9"]
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharectors = ["!", "@", "#", "$", "%", "&", "*", "?"]
var resultArray = []

// How to use the array and apply it
if (useNumbers){
    resultArray = resultArray.concat(numberChars);
  }
  
  if (useUpperCase){
    resultArray = resultArray.concat(upperChars);
  }
  
  if (useLowerCase){
    resultArray = resultArray.concat(lowerChars);
  }
  
  if (useSpecialCharectors){
    resultArray= resultArray.concat(specialCharectors);
  }

//   requires user input to generate password using the arrays 
function generatePassword() { 
var randomPass = ""
  for ( var i = 0; i< confirmLength; i++) {
   randomPass = randomPass + resultArray[Math.floor(Math.random() * resultArray.length)];
   console.log(randomPass)
  }
return randomPass}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);