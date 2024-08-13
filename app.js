//problem no:1
function calculate(a, b, operation) {
    if (operation === "+") {
        return add(a, b);
    }
    if (operation === "-") {
        return sub(a, b);
    }
    if (operation === "*") {
        return mul(a, b);
    }
    if (operation === "/") {
        return div(a, b);
    }
    function sub(a, b) {
        return a - b;
    }
    function add(a, b) {
        return a + b;
    }
    function mul(a, b) {
        return a * b;
    }
    function div(a, b) {
        if (b == 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
}
console.log(calculate(2, 99, '-'));
//problem no:2
var calculator = /** @class */ (function () {
    function calculator() {
    }
    calculator.prototype.add = function (x, y) {
        return x + y;
    };
    calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    calculator.prototype.mul = function (x, y) {
        return x * y;
    };
    calculator.prototype.div = function (x, y) {
        return x / y;
    };
    calculator.prototype.calculate = function (x, y, operation) {
        if (operation === "+") {
            return this.add(x, y);
        }
        if (operation === "-") {
            return this.sub(x, y);
        }
        if (operation === "*") {
            return this.mul(x, y);
        }
        if (operation === "/") {
            return this.div(x, y);
        }
    };
    return calculator;
}());
var cal = new calculator();
console.log(cal.calculate(2, 3, '+'));
console.log(cal.calculate(5, 8, '*'));
//problem2
var myArray = ['hadia', 9, 'fatima', '45', true, false, 9, 10, 10];
var numberArray = [];
var stringArray = [];
var booleanArray = [];
for (var a = 0; a < myArray.length; a++) {
    if (typeof myArray[a] === "number") {
        numberArray.push(myArray[a]);
    }
    else if (typeof myArray[a] === "string") {
        stringArray.push(myArray[a]);
    }
    else if (typeof myArray[a] === "boolean") {
        booleanArray.push(myArray[a]);
    }
    else {
        console.log("invalid");
    }
}
console.log("Number array is:".concat(numberArray));
console.log("String Array is :".concat(stringArray));
console.log("Boolean Array is:".concat(booleanArray));
