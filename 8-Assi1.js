console.log("==========check even or odd=======");


var checkevenOdd=function(num){
  if (num%2 ==0) {
    return "EVEN";

  } else {
    return "ODD";
    
  }  
}
var result= checkevenOdd(45);
console.log(`the number 45 is:${ result}`);

var result= checkevenOdd(98);
console.log(`the number 98 is:${ result}`);

var result= checkevenOdd(67);
console.log(`the number 67 is:${ result}`);

var result=checkevenOdd(70);
console.log(`the number 70 is:${70}`);

console.log("======check  voting eligibility =================");

var checkeligibleVoting=function(age){
  if (age>=18) {
    return "you are Eligible for vote";
    
  } else {
    return " you are not eligibility for vote"
    
  }
}
var result=checkeligibleVoting(18);
console.log(`the age 18:${ result}`);



var result=checkeligibleVoting(20);
console.log(`the age 20:${ result}`);


var result=checkeligibleVoting(17);
console.log(`the age 17:${result}`);

var result=checkeligibleVoting(40);
console.log(`the age 40:${result}`);



console.log("=====check string================");
var checkstring=function(num){
  if (num>=10) {
    return "more than 10 character"
    
  } else {
    return "not more than 10 charcater"
    
  }
}
var result= checkstring(10);
console.log(`The character is: Javascript - Es6: ${result}`);


console.log("========Check  string starts with 'Java'===========");
let checkStrings = ["JavaScript Language", "Programming Language"];

for (let str of checkStrings) {
    if (str.startsWith("Java")) {
        console.log(`"${str}"  Starts with "Java"`);
    } else {
        console.log(`"${str}"  Does not start with "Java"`);
    }
}



















