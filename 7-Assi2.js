
console.log("=======Male marriage eligibility check========================");


function maleMarriageEligibility(gender,age,boyName){
    var result=(gender=="Male" && age >=21)
    ?`Hey${boyName} you are eligible for marriage`
    :`Hey ${boyName} you are not eligible for marriage`
    return result;
}
var returnvalue = maleMarriageEligibility("male",25,"Bill");
console.log(returnvalue);




function  maleMarriageEligibility(gender,age,boyName){
    var result=(gender=="male" && age >=21)
    ?`Hey${boyName} you are eligible for marriage`
    :`Hey ${boyName} you are not eligible for marriage`
    return result;
}
var returnvalue= maleMarriageEligibility("male",17,"stew jobs");
console.log(returnvalue);



console.log("=========Female marriage eligibility check =============================");
function femaleMarriageEligibility(gender,age,girlName){
    var result=(gender=="female" && age >=18)
    ?`Hey ${girlName} you are eligible for marriage`
    :`Hey ${girlName} you are not eligible for marriage`
    return result;
}
    var returnvalue= femaleMarriageEligibility("female",16,"jenifer");
    console.log(returnvalue);



    function femaleMarriageEligibility(gender,age,girlName){
        var result=(gender=="female" && age >=18)
        ?`hey ${girlName} you are eligible for marriage`
        :`Hey ${girlName} you are not eligible for marriage`
        return result;

    }
var returnvalue= femaleMarriageEligibility("female",27,"Malinda gates");
console.log(returnvalue);








