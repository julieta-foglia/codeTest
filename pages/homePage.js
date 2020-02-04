const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const key = webdriver.Key;
const until = webdriver.until;
const TIMEOUT = 40000;

const SEARCH_BAR = By.id('search-key');

function HomePage(webdriver) {
    this.driver = webdriver;
}

HomePage.prototype.waitUntilLocated = async function(locator) {
    return await this.driver.wait(until.elementLocated(locator), TIMEOUT);
};

HomePage.prototype.waitUntilVisible = async function(locator) {
    await this.waitUntilLocated(locator);
    return await this.driver.wait(
        until.elementIsVisible(this.driver.findElement(locator)), TIMEOUT
    );
};

HomePage.prototype.findElement = async function(element) {
    return await this.driver.findElement(element);
};

HomePage.prototype.click = async function(element) {
    return await this.findElement(element).click();
};

HomePage.prototype.clear = async function(element) {
    return await this.findElement(element).clear();
};

HomePage.prototype.sendKeys = async function(element, keys) {
    const result = await this.findElement(element);
    return await result.sendKeys(keys);
};

HomePage.prototype.sleep = async function(time) {
    return await this.driver.sleep(time);
};

HomePage.prototype.getPage = async function(url) {
    await this.driver.manage().window().maximize();
    await this.driver.navigate().to(url);
    return this;
};

HomePage.prototype.search = async function (searchTerm) {
    await this.waitUntilVisible(SEARCH_BAR);
    await this.sendKeys(SEARCH_BAR, searchTerm);
    await this.sendKeys(SEARCH_BAR, key.ENTER);
    return this;
};

HomePage.prototype.goToSecondTab = async function() {
    await this.driver.actions().keyDown(key.CONTROL).sendKeys(key.NUMPAD1).perform();
    await this.driver.actions().keyDown(key.CONTROL).sendKeys("w").perform();
};

module.exports = HomePage;


