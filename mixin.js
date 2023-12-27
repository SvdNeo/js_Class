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

//event mixin
// EventMixin definition
const EventMixin = {
    _events: {},
    on(event, callback) {
      // ... implementation ...
    },
    off(event, callback) {
      // ... implementation ...
    },
    emit(event, ...args) {
      // ... implementation ...
    }
  };
  
  // Class that incorporates EventMixin
  class MyClass {
    constructor(name) {
      this.name = name;
      Object.assign(this, EventMixin);
    }
  
    performTask() {
      console.log(`${this.name} performing a task.`);
      this.emit('taskCompleted', this.name);
    }
  }
  
  // Usage
  const myObject = new MyClass('Object1');
  myObject.on('taskCompleted', (name) => {
    console.log(`Event received: Task completed by ${name}`);
  });
  
  myObject.performTask(); // Triggers the 'taskCompleted' event
  