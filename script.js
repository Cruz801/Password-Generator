// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleChar = [];
  var numberChar = ['1','2','3','4','5','6','7','8','9'];
  var lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var specialChar = ['#','!','$','%','*','@','+'];
  var userLength = 0;
var randomLetter = [];


function reset(){
  possibleChar = [];
  userLength = 0;
  randomLetter = [];
  userNumbers = false;
  userLower = false;
  userUpper = false;
  userSpecial = false;
}

function generatePassword(){
  reset();
  var userLengthPrompt = prompt ("How many characters would you like your password? Length between 8-128");
  if ( userLengthPrompt < 129 && userLengthPrompt > 7){
    userLength = userLengthPrompt;
  }else{
    window.alert("Must pick one");
    generatePassword();
    return;
  }
  
  var userNumbers = confirm ("Would you like to include numbers?");
  if (userNumbers){
    possibleChar = possibleChar.concat(numberChar);
  }
  var userLower = confirm ("Would you like to use lowercase?");
  if (userLower){
    possibleChar = possibleChar.concat(lowerChar);
  }
  var userUpper = confirm ("Would you like to use uppercase?");
  if (userUpper){
    possibleChar = possibleChar.concat(upperChar);
  }
  var userSpecial = confirm ("Would you like to use special characters?")
  if (userSpecial){
    possibleChar = possibleChar.concat(specialChar);
  }
  if (!userNumbers && !userLower && !userUpper && !userSpecial){
    window.alert("Must pick one");
    generatePassword();
  }else{
    console.log(possibleChar);
    generate();
  }
}

function generate(){
for (var i=0; i < userLength; i++){
  var randomIndex = Math.floor(Math.random() * possibleChar.length);
  randomLetter += possibleChar[randomIndex];
  //password.push(randomLetter + "");
}
//return password
writePassword(randomLetter);
}


// Write password to the #password input
function writePassword(randomLetter) {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = randomLetter;
console.log(passwordText);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword, writePassword);
