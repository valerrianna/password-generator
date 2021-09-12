// Assignment code here
var lc = "";
var uc = "";
var num = "";
var special = "";

//prompt for length of password -> 8-126
var passwordLength = window.prompt("How long would you like your password to be?");
  if (passwordLength < 8) {
    window.alert("Password can not be less than 8 characters long.")
  }
  else if (passwordLength > 126) {
    window.alert("Password must be less than 126 characters.")
  }
  else {
    window.alert("Your password is" + passwordLength + " long.");
  }

//confirm lower case
var lowerCase = window.confirm ("Would you like lower cases in your password?");
  if (!lowerCase) {
    window.alert("Your password will have no lowercases")
  }
  else {
    window.alert("Your password will contain lowercases");
    var lc = "abcdefghijklmnopqrstuvwzyz";
  }

//confirm upper case
var upperCase = window.confirm ("Would you like upper cases in your password?");
  if (!upperCase) {
    window.alert("Your password will have no upper cases")
  }
  else {
    window.alert("Your password will contain upper cases");
    var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

//confirm number
var number = window.confirm ("Would you like numbers in your password?");
  if (!number) {
    window.alert("Your password will have no numbers.")
  }
  else {
    window.alert("Your password will contain numbers");
    var num = "0123456789";
  }

//confirm special characters
var specialCharacters = window.confirm ("Would you like special characters in your password?");
  if (!upperCase) {
    window.alert("Your password will have no special characters")
  }
  else {
    window.alert("Your password will contain special characters");
    var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

//validate at laest one character type
if (!lowerCase && !upperCase && !number && !specialCharacters) {
  window.alert("Please choose at least one character type.")
}

// generate password

function generatePassword() {
 
  charSet = [lc, uc, num, special].filter(Boolean).join("");
  var retVal = "";
  for (var i = 0; i < passwordLength; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
alert(generatePassword());




// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
