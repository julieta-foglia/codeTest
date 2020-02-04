const HomePage = require('../pages/homePage.js');

const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const key = webdriver.Key;

const PAGE_2_BUTTON = By.xpath('//button[text() = "2"]');
const SECOND_AD = By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div/div[2]/ul/li[2]/div/div[2]/div[1]/div[1]/a');
const PAGE_SEARCH = By.css('.next-input.next-large input');
const TIMEOUT = 10000;

function SearchResultsPage(webdriver) {
    HomePage.call(this, webdriver);
}

SearchResultsPage.prototype = Object.create(HomePage.prototype);
SearchResultsPage.prototype.constructor = SearchResultsPage;

SearchResultsPage.prototype.clickPageTwo = async function() {
    await this.driver.actions().sendKeys(key.END).perform();
    await this.waitUntilVisible(PAGE_2_BUTTON);
    const result = await this.findElement(PAGE_2_BUTTON);
    return result.click();
};

SearchResultsPage.prototype.clickSecondAd = async function() {
    await this.waitUntilVisible(SECOND_AD);
    const result = await this.findElement(SECOND_AD);
    await result.click();
    await this.driver.sleep(TIMEOUT);
};

SearchResultsPage.prototype.searchPage2 = async function() {
    await this.driver.actions().sendKeys(key.END).perform();
    await this.waitUntilVisible(PAGE_SEARCH);
    const result = await this.findElement(PAGE_SEARCH);
    await result.sendKeys('2');
    await result.sendKeys(key.ENTER);
    await this.driver.sleep(TIMEOUT);
};

module.exports = SearchResultsPage;


