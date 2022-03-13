// Password variable options //
var keys = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*-_+="
};


// generatePassword Function //
var generatePassword = function() {
  // Ask and retrieve which options are wanted within the password //
  var promptCharacters = window.prompt("How many characters would you like in your password?");
  var numberOfCharacters = parseInt(promptCharacters);
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
  // console.log(numberOfCharacters);
  var includeLowercase = window.confirm("Would you like to include lowercase letters in your password? If yes, click 'OK'. If no, click 'Cancel'.");
  // console.log(includeLowercase);
  var includeUppercase = window.confirm("Would you like to include uppercase letters in your password? If yes, click 'OK'. If no, click 'Cancel'.");
  // console.log(includeUppercase);
  var includeNumbers = window.confirm("Would you like to include numbers in your password? If yes, click 'OK'. If no, click 'Cancel'.");
  // console.log(includeNumbers);
  var includeSymbols = window.confirm("Would you like to include symbols in your password? If yes, click 'OK'. If no, click 'Cancel'.");
  // console.log(includeSymbols);
  }
  // If all options are return false, make them pick at least one option //
  else {
    window.alert("Password must be between 8 - 128 characters!");
    return generatePassword();
  }
  
  // If at least one option returns true, add them to the empty array 'passwordKey'
  if (includeLowercase || includeUppercase || includeNumbers || includeSymbols) {
    var passwordKey = "";
    if (includeLowercase) {
      passwordKey += keys.lowerCase;
    }
    if (includeUppercase) {
      passwordKey += keys.upperCase;
    }
    if (includeNumbers) {
      passwordKey += keys.numbers;
    }
    if (includeSymbols) {
      passwordKey += keys.symbols;
    }
  // generate random number to pick out of 'passwordKey' array and add it to the 'answer' empty array
    var answer = "";
    for (var i = 0; i <numberOfCharacters; i++) {
      // console.log(numberOfCharacters);
      answer += passwordKey[Math.floor(Math.random() * passwordKey.length)]
    }
    return answer;
  }
  else {
    window.alert("Please choose at least one option to create your password.");
    return generatePassword();
  }
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
