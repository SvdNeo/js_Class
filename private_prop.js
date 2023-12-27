class coffeemachine{
    water =0;
    constructor(power){
        this.power = power;
        console.log(`the power is ${power}`)
    }
}
let cfd = new coffeemachine(100)
console.log(cfd.power)
cfd.water = 20;
console.log(cfd.water)