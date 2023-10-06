// Assignment Code
var generateBtn = document.querySelector("#generate");
//continue writing out list of letters for lowercase uppercase numbers and special char
let lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numericChar = ["0","1","2","3","4","5","6","7","8","9",];
let specialChar = ["!","@","#","$","%","^","&","*","(",")","|","{","}","[","]","/","?",".",">",",","<","~","`"];
let storedChar  = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How long to you want your password to be",);
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("Password generated:",password);
  } else {
    generatedPassword = alert("Invalid password length. Please enter the correct value between 8 and 128 characters.")
  }
  var lowercaseChoice = confirm("Do you want lowercase characters?");
  if (lowercaseChoice === true){
    for (let i = 0; i < lowercaseLetters.length; ++i){
      storedChar.push(lowercaseLetters[i])
    }
  };
  var uppercaseChoice = confirm("Do you want uppercase characters?");
  if (uppercaseChoice === true){
    for (let i = 0; i < uppercaseLetters.length; ++i){
      storedChar.push(uppercaseLetters[i])
    }
  };
  var numericChoice = confirm("Do you want numeric characters?");
  if (numericChoice === true){
    for (let i = 0; i < numericChar.length; ++i){
      storedChar.push(numericChar[i])
    }
  };
  var specialChoice = confirm("Do you want special characters?");
  if (specialChoice === true){
    for (let i = 0; i < specialChar.length; ++i){
      storedChar.push(specialChar[i])
    }
  };

  var generatedPassword = "";
  storedChar.sort(() => Math.random() - 0.5);
  generatedPassword = storedChar.slice(0, passwordLength).join("");
  return generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



