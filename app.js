/*const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3)) 
module.exports = {sum}
*/


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollars){
    return (dollars/oneEuroIs.USD) * oneEuroIs.JPY;    
}

function fromEuroToDollar(euros){
    return euros * oneEuroIs.USD;    
}

function fromYenToPound(yen){
    return (yen/oneEuroIs.JPY) * oneEuroIs.GBP;   
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}