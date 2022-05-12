// Assignment code here


// Function for criterias
function crits() {

  // Prompts user for the criteria
  var crit1 = prompt("Choose the length of your password(8 ~ 128)")

    //  If the crit1 is between 8 ~ 128
  if (crit1 < 128 && crit1 > 8) {
    var pwLength = crit1
    return pwLength
  }

    //  If the crit1 is not between 8 ~ 128 (Including strings)
    //    Alerts and returns to the beginning
  else {
    alert("Has to be a number between 8 and 128...");
    return crits()
  }

    //  Criterion 2
  var crit2 = prompt("What character types do you want in your password?")


}

function generatePassword() {
 crits();

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