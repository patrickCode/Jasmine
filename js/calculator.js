export class Calculator 
{
    constructor() {
        this.currentValue = 0;
    }

    add(a, b) {
        this.currentValue = a + b;
        return this.currentValue;
    }

    subtract(a, b) {
        this.currentValue = a - b;
        return this.currentValue;
    }

    multiply(a, b) {
        this.currentValue =  a * b;
        return this.currentValue;
    }

    divide(a, b) {
        this.currentValue = a / b;
        return this.currentValue;
    }

    getDivisors(num) {
        if (num <= 0)
            throw new Error("Number should be positive");
        let divisors = [];
        for (var i = 1; i <= num; i++) {
            if (num % i === 0)
                divisors.push(i);
        }
        return divisors;
    }
}