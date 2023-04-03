function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

function reverseString(str) {
    //make it concise
    return str.split("").reverse().join("");
}


/* 
  Add your pseudocode here
  string1 = argument
  string2 = reverseArgument

  if argument = reverseArgument then string is palindrome
  else it is not 
*/

/*
  Add written explanation of your solution here
  I figured spliting the string to an array and then reversing it would be the most efficient way to solve this code.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
