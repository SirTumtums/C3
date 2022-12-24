// Assignment Code
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = parseInt(prompt("Please pick a number between 8 and 128 for length of password"), 10);
  if (Number.isNaN(passwordLength)) {
    alert("Please provide a number")
    passwordLength = null
    return
  } else if (passwordLength < 8) {
    alert("Please provide a number greater than 8")
    passwordLength = null
    return
  } else if (passwordLength > 128) {
    alert("Please provide a number less than 128")
    passwordLength = null
    return
  }


  var lowercaseConfirm = confirm("Do you want lowercase in your password");
  var uppercaseConfirm = confirm("Do you want uppercase in your password");
  var numberConfirm = confirm("Do you want numbers in your password");
  var specialConfirm = confirm("Do you want special characters in your password");
  console.log(lowercaseConfirm)
  console.log(uppercaseConfirm)
  console.log(numberConfirm)
  console.log(specialConfirm)

  // declaring a variable for concatenating the arrays based on the user's input
  var passwordOptions = [];
  
  // all false
  // lowercaseConfirm === false & uppercaseConfirm === false & numberConfirm === false & specialConfirm === false)

  if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialConfirm) {
    alert("You need to choose at least one of the options");
  } 

  // all true
  else if (lowercaseConfirm && uppercaseConfirm && numberConfirm && specialConfirm) {
    passwordOptions = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters);
    console.log(passwordOptions);
  }

  // 3 true, 1 false
  // lower = true, upper = true, number = true, special = false
  else if (lowercaseConfirm && uppercaseConfirm && numberConfirm && !specialConfirm) {
    passwordOptions = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters)
    console.log(passwordOptions);
  }

  // lower = true, upper = true, number = false, special = true
  else if (lowercaseConfirm && uppercaseConfirm && !numberConfirm && specialConfirm) {
    passwordOptions = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters)
    console.log(passwordOptions);
  }


  // lower = true, upper = false, number = true, special = true
  else if (lowercaseConfirm && !uppercaseConfirm && numberConfirm && specialConfirm) {
    passwordOptions = lowerCasedCharacters.concat(numericCharacters, specialCharacters)
    console.log(passwordOptions);
  }


  // lower = false, upper = true, number = true, special = true
  else if (!lowercaseConfirm && uppercaseConfirm && numberConfirm && specialConfirm) {
    passwordOptions = upperCasedCharacters.concat(numericCharacters, specialCharacters)
    console.log(passwordOptions);
  }

  // 2 False 2 True
  // Lc & UC
  else if (lowercaseConfirm && uppercaseConfirm && !numberConfirm && !specialConfirm){
    passwordOptions = lowerCasedCharacters.concat(upperCasedCharacters)
  }

  // Lc sc
  else if (lowercaseConfirm && !uppercaseConfirm && !numberConfirm && specialConfirm){
    passwordOptions = lowerCasedCharacters.concat(specialCharacters)
  }

  // lc Nc
  else if (lowercaseConfirm && !uppercaseConfirm && numberConfirm && !specialConfirm){
    passwordOptions = lowerCasedCharacters.concat(numericCharacters)
  }

  // Uc NC
  else if (!lowercaseConfirm && uppercaseConfirm && numberConfirm && !specialConfirm){
    passwordOptions = upperCasedCharacters.concat(numericCharacters)
  }

  // UC Sc
  else if (!lowercaseConfirm && uppercaseConfirm && !numberConfirm && specialConfirm){
    passwordOptions = upperCasedCharacters.concat(specialCharacters)
  }

  // Nc Sc
  else if (!lowercaseConfirm && !uppercaseConfirm && numberConfirm && specialConfirm){
    passwordOptions = numericCharacters.concat(specialCharacters)
  }

  // 3 False 1 True
  // UC only
  else if (!lowercaseConfirm && uppercaseConfirm && !numberConfirm && !specialConfirm) {
    passwordOptions = upperCasedCharacters
    
  }

  // Lc only
  else if (lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialConfirm) {
    passwordOptions = lowerCasedCharacters
    
  }


  // Nc only
  else if (!lowercaseConfirm && !uppercaseConfirm && numberConfirm && !specialConfirm) {
    passwordOptions = numericCharacters
    
  }


  // Sc only
  else if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && specialConfirm) {
    passwordOptions = specialCharacters
    
  }

  // explanation of for loop
// i = 0 -> do something inside of the for loop -> 0 < 3 ? yes! -> i++ = (i = i+1)
// i = 1 -> do samething inside of the for loop -> 1 < 3 ? yes! -> i++
// i = 2 -> do samething inside of the for loop -> 2 < 3 ? yes! -> i++
// i = 3 -> do something ... -> 3 < 3 ? no! - > terminate

  // declaring a variable for picked characters based on user input
  var generatedPassword = [];

  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * passwordOptions.length);
    console.log(random, passwordOptions[random]);

    generatedPassword.push(passwordOptions[random]);
  }

  console.log(generatedPassword);
  generatedPassword = generatedPassword.join('');
  console.log(generatedPassword);
  
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;0

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
