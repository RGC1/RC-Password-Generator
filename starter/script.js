// Array of special characters to be included in password
const specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
const upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordOptions = {
    length: parseInt(prompt("Confirm how many characters the password should contain: between 8 and 128.")),
    lowerCaseChar:confirm("Should the password contain lowercase characters?"),
    upperCaseChar: confirm("Should the password contain uppercase characters?"),
    specialChar:confirm("Should the password contain special characthers?"),
    numericChar: confirm("Should the password contain number?"),
  };
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  const item = Math.floor(Math.random() * arr.length);
  return arr[item];
}

// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions ();

  let allChar = '';

  if (passwordOptions.specialChar) {
    allChar += specialCharacters;
  }
  if (passwordOptions.numericChar) {
    allChar += numericCharacters;
  }
  if (passwordOptions.lowerCaseChar) {
    allChar += lowerCasedCharacters;
  }
  if (passwordOptions.upperCaseChar) {
    allChar += upperCasedCharacters;
  }
  
let password = "";

for (let i= 0; i < passwordOptions.length; i++) {
  let anyChar = getRandom(allChar.split(''));
  password += anyChar;
}
return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
