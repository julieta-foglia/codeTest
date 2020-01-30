const HomePage = require('../pages/homePage.js');

const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const key = webdriver.Key;

const PAGE_2_BUTTON = By.css('button[text="2"]');
const SECOND_AD = By.css('ul > li:nth-child(2)');

function SearchResultsPage(webdriver) {
    HomePage.call(this, webdriver);
}

SearchResultsPage.prototype = Object.create(HomePage.prototype);
SearchResultsPage.prototype.constructor = SearchResultsPage;

SearchResultsPage.prototype.clickPageTwo = function() {
    this.waitUntilVisible(PAGE_2_BUTTON);
    this.findElement(PAGE_2_BUTTON).click();
    return this;
};

SearchResultsPage.prototype.clickSecondAd = function() {
    this.waitUntilVisible(SECOND_AD);
    this.findElement(SECOND_AD).click();
    return this;
};

module.exports = SearchResultsPage;


