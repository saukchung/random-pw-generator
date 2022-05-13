// Assignment code here


// // Function for criterias
// function criterion1() {

//   // Prompts user for the criteria
//   var crit1 = prompt("Choose the length of your password", "Any number between 8 ~ 128")

//     //  If the crit1 is between 8 ~ 128
//   if (crit1 < 129 && crit1 > 7 && crit1 % 1 === 0) {
//     var pwLength = crit1
//     return pwLength
//   }

//     //  If the crit1 is not between 8 ~ 128 (Including strings)
//     //    Alerts and returns to the beginning
//   else {
//     alert("Has to be a number between 8 and 128...");
//     return criterion1()
//   }
// }
  
//  Criterion 2
function criterion2() {
  //Empty list of user preferred characters
  var listPrefChar = []

  //Asks the user for the inclusion of lowercase
  var crit21 = confirm("Include lowercase?")
  if (crit21 === true) {
    var allLowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
    listPrefChar = listPrefChar.concat(allLowerCase)
    }

  //Asks the user for the inclusion of uppercase
  var crit22 = confirm("Include uppercase?")
  if (crit22 === true) {
    var allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    listPrefChar = listPrefChar.concat(allUpperCase)
    }

//Asks the user for the inclusion of numbers
  var crit23 = confirm("Include numbers?")
  if (crit23 === true) {
    var allNumbers = "1234567890".split("")
    listPrefChar = listPrefChar.concat(allNumbers)
    } 

  //Asks the user for the inclusion of special characters
    var crit24 = confirm("Include special characters?")
  if (crit24 === true) {
    var allSpecial = "!$%&'()*+,-./:;<=>?@[\]^_`{|}~ ".split("")
    listPrefChar = listPrefChar.concat(allSpecial, '"')
    }

  if (listPrefChar.length === 0) {
    alert("Select at least one character type. Try again!!")
    return generatePassword()
  }

  return listPrefChar;
  
}




function generatePassword() {

  var pwLen = prompt("Choose the length of your password", "Any number between 8 ~ 128")
  if (pwLen <= 7 && pwLen > 0) {
    alert("Too short!!")
    return generatePassword()
  }
  if (pwLen >= 129) {
    alert("Too long!!")
    return generatePassword()
  }
  if (pwLen === null) {
    return;
  }
  if (pwLen % 1 !== 0) {
    alert("Whole Numbers!!")
    return generatePassword()
  }
  
  var pwChar = criterion2()
  var generatedPw = []
  for (i = 0; i < pwLen; i++) {
     var ranChar = pwChar[Math.floor(Math.random() * pwChar.length)]
     generatedPw = generatedPw.concat(ranChar)
     password = generatedPw.join('')
   }
  
  return password
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
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);