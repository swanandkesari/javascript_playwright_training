
class TestBuilder {
    constructor() {
        this.testName = "";
        this.testTimeout = 30000;
        this.testRetries = 0;
        this.testTags = [];
        this.testBrowser = "chromium";
    }

    // Each method returns 'this' for chaining
    name(name) {
        this.testName = name;
        return this;  // Return this for chaining!
    }

    timeout(ms) {
        this.testTimeout = ms;
        return this;
    }

    retries(count) {
        this.testRetries = count;
        return this;
    }

    tag(tag) {
        this.testTags.push(tag);
        return this;
    }

    tags(...tags) {
        this.testTags.push(...tags);
        return this;
    }

    browser(browser) {
        this.testBrowser = browser;
        return this.testBrowser;
    }

    build() {
        console.log(`\n  Built Test Configuration:`);
        console.log(`    Name: ${this.testName}`);
        console.log(`    Browser: ${this.testBrowser}`);
        console.log(`    Timeout: ${this.testTimeout}ms`);
        console.log(`    Retries: ${this.testRetries}`);
        console.log(`    Tags: ${this.testTags.join(", ")}`);
        return {
            name: this.testName,
            browser: this.testBrowser,
            timeout: this.testTimeout,
            retries: this.testRetries,
            tags: this.testTags
        };
    }
}


let testConfig = new TestBuilder();

testConfig.name("Login Test")
    //.browser("chromium") //method doesnot return this.. hence should not be included in the chain,
    //.toLowerCase()
    //.toUpperCase()
    //.toLowerCase()
    .timeout(5000)
    .retries(2)
    .tag("smoke")
    .tag("critical")
    .tag("auth")
    .build();

// testConfig.name("Login Test")
// .browser("chromium")
// .timeout(5000)
// .retries(2)
// .tag("smoke")
// .tag("critical")
// .tag("auth")
// .build();

//     testConfig.name("Login Test")
// testConfig.browser("chromium");
// testConfig.timeout(5000);
// testConfig.retries(2);
// testConfig.tag("smoke");
// testConfig.tag("critical");
// testConfig.tag("auth");
// testConfig.build();


//   await page.getByRole('link', { name: 'Get started' }).click();
//     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

//let test1 = new TestRunner("Login Test");
