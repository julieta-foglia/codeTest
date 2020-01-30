const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
const driverTimeout = 10000;

let HomePage = require('../pages/homePage');
let ProductPage = require('../pages/productPage');
let SearchResultsPage = require('../pages/searchResultsPage');
let homePage;
let productPage;
let searchResultsPage;

describe('Ali Express test', function(done) {
    const driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    productPage = new ProductPage(driver);
    searchResultsPage = new SearchResultsPage(driver);

    it('should navigate to aliExpress page', function(done) {
        homePage.getPage('https://www.aliexpress.com');
        driver.sleep(driverTimeout).then(() => done());
    });

});