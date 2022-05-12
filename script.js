// Assignment code here


// Function for criterias
function criterion1() {

  // Prompts user for the criteria
  var crit1 = prompt("Choose the length of your password", "Any number between 8 ~ 128")

    //  If the crit1 is between 8 ~ 128
  if (crit1 < 128 && crit1 > 8) {
    var pwLength = crit1
    return pwLength
  }

    //  If the crit1 is not between 8 ~ 128 (Including strings)
    //    Alerts and returns to the beginning
  else {
    alert("Has to be a number between 8 and 128...");
    return criterion1()
  }
}
  
//  Criterion 2
function criterion2() {
  var listPrefChar = []
  var crit21 = confirm("Include lowercase?")
  if (crit21 === true) {
    var allLowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
    listPrefChar = listPrefChar.concat(allLowerCase)
    }
  var crit22 = confirm("Include uppercase?")
  if (crit22 === true) {
    var allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    listPrefChar = listPrefChar.concat(allUpperCase)
    }

  var crit23 = confirm("Include numbers?")
  if (crit23 === true) {
    var allNumbers = "1234567890".split("")
    listPrefChar = listPrefChar.concat(allNumbers)
    }  

  var crit24 = confirm("Include special characters?")
  if (crit24 === true) {
    var allSpecial = "!$%&'()*+,-./:;<=>?@[\]^_`{|}~ ".split("")
    listPrefChar = listPrefChar.concat(allSpecial, '"')
    }

  return listPrefChar;
  
}




// function generatePassword() {
//  for (i = 0criterion1()
//  console.log(criterion2());

// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);