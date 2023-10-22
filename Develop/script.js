// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomNumber(max) {
  var randomNumber=Math.random() * (max+1);
  return Math.floor(randomNumber);
}

function getRandomElementFromArray(array) {
  var randomPosition=getRandomNumber(array.length-1);
  return array[randomPosition];
} 

function generatePassword() {
  var password="Hello Password";
  //

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
