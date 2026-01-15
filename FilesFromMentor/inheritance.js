class BaseTest {
    name;
    status;
    errors;
    #browser = "Chrome"; //private field

    constructor(name) {
        this.name = name;//this.name = "Login"
        this.status = "PENDING";
        this.errors = [];
    }
    changeBrowser(newBrowser) {
        this.#browser = newBrowser;
    }
    start() {
        console.log(`  Starting: ${this.name}`);
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
}
//name change from Login to Get Users 
class UITest extends BaseTest {
    constructor(name, url, selector) {
        super(name);  // MUST call parent constructor! This is calling parents constructor
        this.url = url;
        this.selector = selector;
    }

    navigate() {
        console.log(`    Navigating to: ${this.url}`);
        this.changeBrowser("Firefox"); // Change private field
    }

    clickElement() {
        console.log(`    Clicking: ${this.selector}`);
    }

    // Override parent method
    start() {
        super.start();  // Call parent start()
        this.navigate();  // Add child behavior
    }
}


class APITest extends BaseTest {
    constructor(name, endpoint, method = "GET") {
        super(name);
        this.endpoint = endpoint;
        this.method = method;
        this.responseTime = 0;
    }

    sendRequest() {
        console.log(`    ${this.method} ${this.endpoint}`);
        this.responseTime = Math.random() * 500;
        console.log(`    Response time: ${this.responseTime.toFixed(2)}ms`);
    }

    start() {
        super.start();
        this.sendRequest();
    }
}

let myTest = new UITest("Login", "https://example.com/login", "#login-button"); //No object of BaseTest gets created
let apiTest = new APITest("Get Users", "https://api.example.com/users", "GET");

console.log("\n--- UI Test ---" + myTest.name);
console.log("API Test ---" + apiTest.name);
console.log("API Test Status ---" + apiTest.status);

console.log("  loginUITest instanceof UITest:", myTest instanceof UITest);
console.log("  loginUITest instanceof BaseTest:", myTest instanceof BaseTest);
console.log("  loginUITest instanceof Object:", myTest instanceof Object);
console.log("  apiTest instanceof APITest:", apiTest instanceof APITest);
console.log("  apiTest instanceof UITest:", apiTest instanceof UITest);


class Test2 {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`  Running ${this.name}`);
    }
}

class E2ETest extends Test2 {
    constructor(name, browser) {
        super(name);
        this.browser = browser;
    }
    setupBrowser() {
        console.log(`  Setting up ${this.browser} browser`);
    }
}

class PlaywrightTest extends E2ETest {
    constructor(name, browser, headless = true) {
        super(name, browser);
        this.headless = headless;
    }
    launch() {
        console.log(`  Launching Playwright (headless: ${this.headless})`);
    }
}
//Always prefer composition over inheritance

//Web application this is ten pages. 
//We will design ten JavaScript classes. 
//Each class will represent a page in the application.


class BasePage {
    constructor(page) {
        this.page = page;
        this.url = "";
    }

    navigate() {
        console.log(`  Navigating to: ${this.url}`);
        // In real Playwright: await this.page.goto(this.url);
    }

    waitForLoad() {
        console.log(`  Waiting for page load...`);
        // In real Playwright: await this.page.waitForLoadState();
    }
}


class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.url = "https://app.com/login";

        // Selectors
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton = "#loginBtn";
        this.errorMessage = ".error";
    }

    login(username, password) {
        console.log(`  Logging in as: ${username}`);
        console.log(`    Fill ${this.usernameInput}: ${username}`);
        console.log(`    Fill ${this.passwordInput}: ********`);
        console.log(`    Click ${this.loginButton}`);
        // In real Playwright:
        // await this.page.fill(this.usernameInput, username);
        // await this.page.fill(this.passwordInput, password);
        // await this.page.click(this.loginButton);
    }
getErrorMessage() {
        console.log(`  Getting error from ${this.errorMessage}`);
        return "Invalid credentials";
        // In real Playwright:
        // return await this.page.textContent(this.errorMessage);
    }
}

class DashboardPage extends BasePage {
    constructor(page) {
        super(page);
        this.url = "https://app.com/dashboard";
        this.userMenu = "#userMenu";
        this.logoutLink = "#logout";
    }

    logout() {
        console.log(`  Logging out`);
        console.log(`    Click ${this.userMenu}`);
        console.log(`    Click ${this.logoutLink}`);
        // In real Playwright:
        // await this.page.click(this.userMenu);
        // await this.page.click(this.logoutLink);
    }

    getWelcomeMessage() {
        return "Welcome, Test User!";
        // In real Playwright:
        // return await this.page.textContent('.welcome');
    }
}
