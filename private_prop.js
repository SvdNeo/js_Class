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
