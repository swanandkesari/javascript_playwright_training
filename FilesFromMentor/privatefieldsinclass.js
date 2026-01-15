class SchoolBus {
    brand;
    #speed;//Maximum speed of the car not more than 60 
    #fuel;//Current fuel level

    constructor(brand, speed, fuel) {
        this.brand = brand;
        this.#speed = speed;
        this.#fuel = fuel;
    }

    changeSpeed(newSpeed) {
        if (newSpeed <= 60) {
            this.#speed = newSpeed;
        } else {
            console.log("Speed cannot exceed 60 km/h");
        }
    }

    changeBrand(newBrand) {
        this.brand = newBrand;
    }

    drive() {
        console.log(`Driving at ${this.#speed} km/h with ${this.#fuel} liters of fuel.`);
    }

    refuel(amount) {
        this.#fuel += amount;
        console.log(`Refueled ${amount} liters. Total fuel: ${this.#fuel} liters.`);
    }
}

let schoolBus = new SchoolBus("ABC", 50, 100);
schoolBus.drive();
schoolBus.refuel(20);   
schoolBus.changeSpeed(70); // Should show error
schoolBus.drive();
