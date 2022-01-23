// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword1 = window.confirm("Would you like uppercase characters?");
var generatePassword2 = window.confirm("Would you like lowercase characters?");
var generatePassword3 = window.confirm("Would you like special characters?");
var generatePassword4 = window.confirm("Would you like number characters?");
var passwordLength = window.prompt("how many characters do you want for your password?")
if (passwordLength >= 8 && passwordLength <= 128); 
   else {alert("your password needs to be between 8 and 128 characters!")};

 const allChar = {
  upperCase : ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z"),
  lowerCase : ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"),
  specChar : ("`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="),
  numbers : ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0"),
 }

// var upperCase1 = upperCase[Math.floor(Math.random()*upperCase.length)];
// var lowerCase1 = lowerCase[Math.floor(Math.random()*lowerCase.length)];
// var specChar1 = specChar[Math.floor(Math.random()*specChar.length)];
// var numbers1 = numbers[Math.floor(Math.random()*numbers.length)];

//function generatePassword () {

  
   let randomChar = " ";
      if (generatePassword1 == true) {randomChar += allChar}
      if (generatePassword2 == true) {randomChar += allChar}
      if (generatePassword3 == true) {randomChar += allChar}
      if (generatePassword4 == true) {randomChar += allChar}

   let password = " ";
    for (var i = 0; i < passwordLength; i++) {
      var newPassword = randomChar[Math.floor(Math.random() * randomChar.length)]
        password += newPassword
      }
    
  function setnewPassword () {
        newPassword.textContent = password;
      }
      
  generateBtn.addEventListener("click", function () { if (password == newPassword);
        setnewPassword();
       });
// var index1 = math.floor(math.random() * upperCase.length);
// var index2 = math.floor(math.random() * lowerCase.length);
// var index3 = math.floor(math.random() * specChar.length);
// var index4 = math.floor(math.random() * numbers.length);

//if (generatePassword = true) let characters = upperCase + lowerCase;
  // specChar.checked ? (characters += specChar) : " ";
  // numbers.checked ? (characters += numbers) : " ";
  // passwordText. value - generatePassword(length.value, characters);


 // Write password to the #password input
//  function writePassword() {
//   var password = generate();
//   var passwordText = document.querySelector("#password")
//   passwordText.value = password;

 
 //for (let i = 0, i = upperCase.length + lowerCase.length + numbers.length + specChar.length; i < length; ++i){writePassword = upperCase[Math.floor(Math.random()*upperCase.length)] + lowerCase[Math.floor(Math.random()*lowerCase.length)] + specChar[Math.floor(Math.random()*specChar.length)] + numbers[Math.floor(Math.random()*numbers.length)];}
  //   return password;}

//   let characters = upperCase + lowerCase;
//   specChar.checked ? (characters += specChar) : " ";
//   numbers.checked ? (characters += numbers) : " ";
//   password.value - generate(length.value, characters);
//   length = "#";
//   retval = "";

// var writePassword = (length, characters) => {
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += characters.charAt(
//       Math.floor(Math.random() * characters.length)
//     );
//   }
//   return retval;
// }
// function copyPassword() {
//   var copyText = document.getElementById("password");
//   copyText.select();
//   document.execCommand("copy");
