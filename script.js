// Assignment Code
var generateBtn = document.querySelector("#generate");


var passwordLength = prompt ("How many characters do you want for your password?");
var includeLowerCase = confirm ("Do you want to include lower case?")
var includeUpperCase = confirm("Do you want to include upper case?");
var randomNumbers = confirm("Do you want to include numbers?");
var specialCharacters = confirm("Do you want to include special characters?");

function getRandomNumber(min, max) {
  var randomNumber=Math.random() * (max+1);
  return Math.floor(randomNumber);
}
var numbers = getRandomNumber(1, 100);

function getRandomUpperCaseLetter() {
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}
var randomUpperCase = getRandomUpperCaseLetter();

function getRandomLowerCaseLetter() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}
var randomLowerCase = getRandomLowerCaseLetter();

function getRandomSpecialCharacter() {
  var specialCharacters = '!@^&*()_/-=+~`|}{[]#$%\\:;?><,.';
  var randomIndex = Math.floor(Math.random() * specialCharacters.length);
  return specialCharacters[randomIndex];
}
var randomSpecialCharacter = getRandomSpecialCharacter();

function generatePassword() {
  var password="";
  var desiredLength = parseInt(passwordLength);

  while (password.length < desiredLength) {
    if (includeUpperCase) {
      password += randomUpperCase;
    } 
    if (randomNumbers) {
      password += numbers;
    }
    if (includeLowerCase) {
      password += randomLowerCase;
    }
   if (specialCharacters) {
      password += randomSpecialCharacter;
    }
  }

  password = password.slice(0, desiredLength);
  return password;
}
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
