//plan
/*
OOPS : ObjectOriented Paradigm
error handling
assync and all;

*/
//Class name:  Pascle case
//defining a class do nothing in memory
// it is just a design or a blue printin
// class gets executed when object of class is created

class Test {
    // constructor is used to initialize the state of the object
    // initalize instace of vairable/ object
    constructor() {

    }
}


// my programm has 50 methods 43 Variables -Project -- 30 JS javascript files
// exampleS: getEmpName(), salary, address, role, ChangeName(), addEmp(), promoteEmp(),.. --HRMS system
//in OOPS we collect related thingks inside a class and classes represent real workd entities
// HRMS: EMployee, Manager, Departement..
// All information, methods and parameter related to employee will be in Employee class.
// Manager: derrived from Employee plus they have methods only managers can do,.
// so all 50 methods 43 variables are all covered in the class clusters ..
// in Oops we give a structure to prgramms in terms of classes we think in terms of classes mapping to real world objects

// If employee has access to change salary- is it good? -not a good system
// hence we need

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
inheritance is ouse only if needed because it creates binding
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
        console.log(`driving at${this.speed}km/h with ${this.fuel} liters of fuel`)

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


//web application has 10 pages
// create 10 classes representing the pages
// each class contains the operations that I can performs
// there can be common objects in some pages
// each page will have a url
// base page
// url
// wait to load

// login page extend base page
// dashboard page extend base page..

//override method overriding is allowed in js for class.
// method overloading is not allowed in javascript and python