
/*
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
*/


test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    
   
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 106.5833 yen", function(){
    
    const { fromDollarToYen } = require('./app.js')
    
    
    expect(fromDollarToYen(2)).toBeCloseTo(213.1666); 
})

test("One yen should be 0.0063 pound", function(){
    
    const { fromYenToPound } = require('./app.js')
    
    
    expect(fromYenToPound(300)).toBeCloseTo(1.876); 
})