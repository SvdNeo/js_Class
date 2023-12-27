class CoffeeMachine {
    _water = 0;

    set water(val) {
        if (val < 0) {
            this._water = 0;
        } else {
            this._water = val;
        }
    }

    get water() {
        return this._water;
    }

    constructor(power) {
        this.power = power;
        console.log(`The power is ${power}`);
    }
}

let cfd = new CoffeeMachine(100);
console.log(cfd.power);
cfd.water = 20;
console.log(cfd.water);
cfd.water = -25;
console.log(cfd.water);

let arr = [1, 2, 3];
console.log( arr instanceof Array ); 
console.log( arr instanceof Object );

class Rabbit {}
let rabbit = new Rabbit();
console.log( rabbit instanceof Rabbit );

//task 1 why it returns true

function A() {}
function B() {}

B.prototype = A.prototype = {};
B.prototype = {name:"ok"}
let a = new A();

console.log( a instanceof B );
