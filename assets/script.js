// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
var specChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


function generatePWD(){

  var generatePassword1 = window.confirm("Would you like uppercase characters?");
  var generatePassword2 = window.confirm("Would you like lowercase characters?");
  var generatePassword3 = window.confirm("Would you like special characters?");
  var generatePassword4 = window.confirm("Would you like number characters?");
  var passwordLength = window.prompt("how many characters do you want for your password?");

  if(passwordLength <= 8 && passwordLength >= 128){
    alert("your password needs to be between 8 and 128 characters!")
  }; 

  // var upperCase1 = upperCase[Math.floor(Math.random()*upperCase.length)];
  // var lowerCase1 = lowerCase[Math.floor(Math.random()*lowerCase.length)];
  // var specChar1 = specChar[Math.floor(Math.random()*specChar.length)];
  // var numbers1 = numbers[Math.floor(Math.random()*numbers.length)];

  //function generatePassword () {

  //console.log(generatePassword1);
  let randomChar = [];
  if(generatePassword1 == true){
    randomChar = randomChar.concat(upperCase)
  };
  if(generatePassword2 == true){
    randomChar = randomChar.concat(lowerCase)
  };
  if(generatePassword3 == true){
    randomChar = randomChar.concat(specChar)
  };
  if(generatePassword4 == true){
    randomChar = randomChar.concat(numbers)
  };
  console.log(randomChar);

  let password = " ";

  for (var i = 0; i < passwordLength; i++) {
    var newPassword = randomChar[Math.floor(Math.random() * randomChar.length)]
    password += newPassword
  }
  console.log(password)
  passwordText.value = password;
}

generateBtn.addEventListener("click", function () {
  console.log("button clicked");
  generatePWD();
});

// Write password to the #password input
//  function writePassword() {
//   var password = generate();
//   var passwordText = document.querySelector("#password")
//   passwordText.value = password;
