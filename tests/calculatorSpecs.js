import {Calculator} from './../js/calculator';

describe("Calculator", function() {
    var calculator = new Calculator();

    beforeEach(function() {
        jasmine.addMatchers({
            toBeNegative: function() {
                return {
                    compare: function(actual, expected) {
                        var result = {};
                        result.pass = (actual < 0 && actual === expected);
                        result.message = "Result is not a negative number";
                        return result;
                    }
                }
            }
        })
    })

    it("Initial value should be 0", function() {
        var newCalc = new Calculator();
        expect(newCalc.currentValue).toBeDefined();
        expect(newCalc.currentValue).toBe(0); //===
        expect(newCalc.currentValue).toEqual(0); //==
        expect(newCalc.currentValue).toEqual(jasmine.any(Number));
    });

    it("Should add 2 numbers", function() {
        var result = calculator.add(10, 15);
        expect(result).toEqual(25);
        expect(calculator.currentValue).toEqual(25);
    });

    it("Should subtract 2 numbers", function() {
        var result = calculator.subtract(20, 15);
        expect(result).toEqual(5);
        expect(calculator.currentValue).toEqual(5);
        expect(result).not.toEqual(0); //.not is used for negation
    });

    it("Should get negative result in subtraction", function() {
        var result = calculator.subtract(10, 100);
        expect(result).toBeNegative(-90);
    })

    it("Should multiply 2 numbers", function() {
        var result = calculator.multiply(20, 15);
        expect(result).toEqual(300);
        expect(calculator.currentValue).toEqual(300);
    });

    it ("Composite numbers should have more that 2 divisors", function() {
        var divisors = calculator.getDivisors(100);
        expect(divisors.length).toBeGreaterThan(2);
    });

    it ("Should have 2 as divisors", function() {
        var divisors = calculator.getDivisors(10);
        expect(divisors).toContain(2);
    });
    
    it("Should throw error for -ve number to have divisors", function() {
        var res = function() { calculator.getDivisors(-10) }; //Wrap the throwing function with an anonymous function to test for exception
        expect(res).toThrowError();
    });

    it("Should divide 2 numbers and have decimal result", function() {
        var result = calculator.divide(5, 3);
        expect(result).toBeCloseTo(1.67, 1);
    });

    it("Should get NaN for 0 divide by 0", function() {
        var result = calculator.divide(0, 0);
        expect(result).toBeNaN();
    });

    //xit skips a test case
    xit("Sample test case to skip", function() {
        expect(0).toEqual(0);
    });
});

describe("Sample for afterEach in Calculator", function() {
    var calculator = new Calculator();
    afterEach(function() {
        calculator.currentValue = 0;
    })

    it("Should add number", function() {
        var result = calculator.add(1, 1);
        expect(calculator.currentValue).toBe(2);
    });

    it("Should add number 2nd time", function() {
        expect(calculator.currentValue).toBe(0); //since afterEach has reset the value
        var result = calculator.add(1, 2);
        expect(calculator.currentValue).toBe(3);
    });
})

xdescribe("Sample module to show skipping modules", function() { 
    it("Should be skipped", function() {
        expect(0).toEqual(0)
    });
});