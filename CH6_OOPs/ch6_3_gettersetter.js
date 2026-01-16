/* we covered so far.. 
Inheritance
encapsulation
method overriding
public and private
class
objects
constructor
super() - parents constructor
super.methodName() - parents methods from child class
this - keyword - refers to the current instance of the class
*/

class TestConfiguration {
    constructor() {
        this._timeout = 30000;
        this._retries = 2;
        this._browserName = "chromium";
    }

    // Getter - computed property
    get timeout() {
        console.log(`  Getting timeout: ${this._timeout}ms`);
        return this._timeout;
    }

    // Setter - with validation
    set timeout(value) {
        if (value < 1000) {
            console.log(`  ❌ Timeout too short! Minimum is 1000ms`);
            this._timeout = 1000;
        } else if (value > 300000) {
            console.log(`  ❌ Timeout too long! Maximum is 300000ms`);
            this._timeout = 300000;
        } else {
            console.log(`  ✓ Setting timeout to: ${value}ms`);
            this._timeout = value;
        }
    }

    get retries() {
        return this._retries;
    }

    set retries(value) {
        if (value < 0) {
            console.log(`  ❌ Retries cannot be negative!`);
            this._retries = 0;
        } else if (value > 5) {
            console.log(`  ⚠️  Too many retries! Setting to maximum: 5`);
            this._retries = 5;
        } else {
            console.log(`  ✓ Setting retries to: ${value}`);
            this._retries = value;
        }
    }

    // Getter with computation
    get timeoutInSeconds() {
        return this._timeout / 1000;
    }

    // Read-only property (getter without setter)
    get browserName() {
        return this._browserName.toUpperCase();
    }
}

let config = new TestConfiguration();

console.log("Initial Timeout (ms):", config.timeout);//  no parenthisis and no value is set so getter will be called.
config.timeout = 500; // no need to call like timeout(500)// as assigning the value setter will be called
let abc = config.timeout;
config.browserName = "Chrome";
console.log("Browser Name:", config.browserName);