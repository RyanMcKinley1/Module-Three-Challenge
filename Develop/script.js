// Assignment code here
// var list


var characterLength = 8;

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowercaseletters = [ 'a', 'b', 'c' , 'd' , 'e', 'f', 'g', 'h' , 
'i', 'j' , 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
'w', 'x', 'y', 'z']

var uppercaseletters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
 'W', 'X', 'Y', 'Z']

var specialcharacters = [ '!', '@', '#', '$', '%', '^',
 '&', '*', '(', ')', '~']

 
 // password function 

 function makePassword() {
  var password = gereratePassword();



 }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Adding characters prompts for the user

var characters = [];

function Prompts() {

characterLength = parseInt(prompt("Select password length between 8 and 128 characters."));



if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
  alert("Character length parameters (8-128 characters) not met.");
  return false;
}


if (confirm("Incorporate numbers in password?")) {
  characters = characters.concat(numbers);
}

if (confirm("Incorporate lower case letters in password?")) {
  characters = characters.concat(lowercaseletters);
}


if (confirm("Incorporate upper case letters in password?")) {
  characters = characters.concat(uppercaseletters);
}

if (confirm("Incorporate special characters in password?")) {
  characters = characters.concat(specialcharacters);
}
return true;

}