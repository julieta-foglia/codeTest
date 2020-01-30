const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const key = webdriver.Key;


const SEARCH_BAR = By.id('search-key');

function HomePage(webdriver) {
    this.driver = webdriver;
}

HomePage.prototype.getPage = function(url) {
    this.driver.navigate().to(url);
    return this;
};


HomePage.prototype.search = function(searchTerm) {
    this.waitUntilVisible(SEARCH_BAR);
    this.clear(SEARCH_BAR);
    this.sendKeys(SEARCH_BAR, searchTerm);
    this.sendKeys(SEARCH_BAR, key.ENTER);
    return this;
};

module.exports = HomePage;


