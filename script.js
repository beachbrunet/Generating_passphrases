// Assignment Code
// This is the start of the code, letting the user know we are gonna get started with asking the required Q's
alert("Let's get started with your custom password!")

var generateBtn = document.querySelector("#generate");
var length = prompt("how many Charectors would you like your password to be?")
var specialCharectors = confirm("Would you like to use Special Charectors?")
var lowerCase = confirm("Would you like to use lowercase letters?")
var upperCase = confirm("Would you like to use uppercase letters?")



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// alert("Let's get started with your custom password!")
// console.log



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);