// Assignment code here

//click button to process a series of prompt for password generator

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
    window.alert("Your password will contain lowercases")
  }

//confirm upper case
var upperCase = window.confirm ("Would you like upper cases in your password?");
  if (!upperCase) {
    window.alert("Your password will have no upper cases")
  }
  else {
    window.alert("Your password will contain upper cases")
  }
//confirm number

//confirm special characters

//validate at laest one character type
if (!lowerCase && !upperCase) {
  window.alert("Please choose at least one character type.")
}

//generate password
// function generatePassword() {
//   var length = passwordLength,
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   window.prompt(retVal);
// }

// function generatePassword (length, characters) {
//   var passwordText = "";
//   for (var i = 0; i < length; i++) {
//       password += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return passwordText;
// };

function generatePassword () {
  var characters = [
    {
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      upperCase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      //numericals:"0123456789",
      //specialCharacters:"!@#$%^&*()[]{};':,./<>?"
    }
  ]
  var password ="";
  for (var i = 0; i < passwordLength; i++) {
    var generate = characters.charAt[Math.floor(Math.random() * characters.passwordLength)];
    password = generate;
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}
