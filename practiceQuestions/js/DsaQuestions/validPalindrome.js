//Write a function to check whether string is valid palindrome or not


function isPalindrome(s){
    return s===s.split("").reverse().join("")
}

console.log(isPalindrome('naman'));
console.log(isPalindrome('namax'));