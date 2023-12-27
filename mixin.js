let sayHi = {
    Hi(){
        console.log(`Hi ${this.name}`)
    },
    Bye(){
        console.log(`Bye ${this.name}`)
    }
}

class user{
    constructor(name){
        this.name = name
    }
}
Object.assign(user.prototype,sayHi);
let user1 = new user("sanjay");
user1.Hi();
user1.Bye()