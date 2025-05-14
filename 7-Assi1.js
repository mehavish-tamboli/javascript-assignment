function greaternumber(numOne ,numTwo){


    var result= numOne> numTwo ? numOne:numTwo;
    console.log(`gretaer number is:${ result}`);
}
    greaternumber(10 ,-10);
    greaternumber(800, 899);
    

    console.log("==========even odd number=================");
    function  evenOddcheck(num){

var result= num % 2 == 0 ? "even" : "oddnumber";
   console.log(`the number is:${num} is ${result}`);
    }
    evenOddcheck(29);
     evenOddcheck(44);
      evenOddcheck(0);
       evenOddcheck(101);
   

       console.log("=========even or odd number length=====================");

    function wordLength(word){
        var len= word.length;
        console.log(`word length is:${len}`);
        var type = len % 2=== 0 ? "even" : "odd";
        console.log(`the word is:${word} is ${type}`);

     }
     wordLength("javaScript");
      wordLength("developer");
      wordLength("Google");

       



    













