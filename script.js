// Assignment Code
// Great the user and inform them of the 8-128 charectors that will be used.
// Then ask the user how many charectors they would like to be used(prompt)
// Record the input and approve it for the rules stated above. (if else) (8-128)
// Ask user the following: Do you want to use special charectors? Lowercase? Uppercase? Numbers?
// Record the user inputs for all questions for the generator.
// 


// This is the start of the code, letting the user know we are gonna get started with asking the required Q's
alert("Let's get started with your custom password! Please use No more than 8 Charectors, and a max of a 128.")


var confirmLength = prompt(" How many Charectors would you like your password to be?");
if (confirmLength <8 || > 128) {
    alert("Password length must be between 8 to 128 characters. Try again");
} if {
// var tag = document.createElement(charectorsUsed)

}




// var = confirmLength = {
    
//     logLength: function () {
//         if (confirmLength. is )


//     }
    
    
//     confirmLength ( <= 8 || length >= 128) {
//     alert("Password length must be between 8 to 128 characters. Try again")
//     }














// The questions per assignment requirements: 
var generateBtn = document.querySelector("#generate");
// Capitalized "Special Charector" in the sentence to show importance when reading, same with other questions. 
var specialCharectors = confirm("Would you like to use Special Charectors?")
var lowerCase = confirm("Would you like to use Lowercase Letters?")
var upperCase = confirm("Would you like to use Uppercase Letters?")
var numbers = confirm("Would you like to use Numbers?")




// Here is where I would put the "if else" for charector limit.
// function limit(element)
// {
//     var max_chars = 128;

//     if(element.value.length > max_chars) {
//         element.value = element.value.substr(0, max_chars);
//     }
// }









// (length) || length < 8 || length > 128

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





