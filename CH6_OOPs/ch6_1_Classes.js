//plan
/*
OOPS : ObjectOriented Paradigm
error handling
assync and all;

*/
//Class name:  Pascle case
//Defining a class do nothing in memory
// it is just a design or a blue print
// class gets executed when object of class is created



class Test {
    // Constructor
    constructor(name, priority = "MEDIUM") {
        this.name = name;//this.name is an object level property, while name is local variable of the constructor
        this.priority = priority;
        this.status = "PENDING";
        this.errors = [];
    }
    // constructor is used to initialize the state of the object
    // initalize instace of vairable/ object

    // Instance methods
    start() {
        console.log(`  Starting: ${this.name} (${this.priority} priority)`);
        this.status = "RUNNING";
    }

    fail(error) {
        this.errors.push(error);
        this.status = "FAILED";
        console.log(`  ✗ ${this.name} FAILED: ${error}`);
    }

    pass() {
        this.status = "PASSED";
        console.log(`  ✓ ${this.name} PASSED`);
    }

    getReport() {
        return {
            name: this.name,
            priority: this.priority,
            status: this.status,
            errorCount: this.errors.length
        };
    }
}

let uiTest = new Test("UI Test", "HIGH");//calling constructor function. 
let apiTest = new Test("API Test");  // Uses default priority

uiTest.start();
uiTest.pass();
console.log(uiTest.getReport());
console.log(`report: ${JSON.stringify(uiTest.getReport())}`)
//console.log(status);// gives error
console.log(uiTest.status);
apiTest.start();
apiTest.fail("Network error");
console.log(apiTest.getReport());




/*
E-Commrce application

_login
Customer
Products
Sellers
Carts
    items
    addtocarts
    removeFromCarts
Payment system

*/
/*
In oops we design in such a way that we also think about future.
so we design parent and childs in such away that we can have future childs from both. 
inheritance is used only if needed because it creates binding
if only one method is required and all other members and methods are not required then we can't inherit.
 In this scenario we have to use composition. create an object of class which has that methode and then use it..
 prefer composition over inheritance.
*/
class Car {
    #speed; // initializing with # makes vairable private. user doesn't have access to it
    fuel; // not started with # means public.
    constructor(speed, fuel) {
        this.speed = speed;
        this.fuel = fuel;
    }
    drive() {
        console.log(`driving at ${this.speed}km/h with ${this.fuel} liters of fuel`)

    }
    refuel(amount) {
        this.fuel += amount;
        console.log(`refueled with ${amount} liters of fuel. available is ${this.fuel} liters now.`)

    }
}
let mycar = new Car(50, 100)
mycar.drive()
mycar.refuel(50)
mycar.drive()



//override method overriding is allowed in js for class.
// method overloading is not allowed in javascript and python