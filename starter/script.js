// Array of special characters to be included in password
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
  '.'
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
  'z'
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
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordOptions = {
    lowerCaseChar:promt("Confirm how many characters the password should contain: between 8 and 128."),
    upperCaseChar: confirm("Should the password contain lowercase characters?"),
    specialChar:confirm("Should the password contain special characthers?"),
    numericChar: confirm("Should the password contain number?"),
  };
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var item = Math.floor(Math.random() * arr.lenght);
  return arr[item];
}

// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions ()
  let allChar = specialCharacters + numericCharacters + lowerCasedCharacters + upperCasedCharacters;
  if (passwordOptions.specialCharacters) {
    allChar =+ specialCharacters;
  }
  if (passwordOptions.numericCharacters) {
    allChar =+ numericCharacters;
  }
  if (passwordOptions.lowerCasedCharacters) {
    allChar =+ lowerCasedCharacters;
  }
  if (passwordOptions.upperCasedCharacters) {
    allChar =+ upperCasedCharacters;
  }



let password = "";
for (let i= 0; i < getPasswordOptions.length; i++) {
  let anyChar = getRandom(allChar.split(""));
  password += anyChar;
}
return password;
}

/*

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
*/