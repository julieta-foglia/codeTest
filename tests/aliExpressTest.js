const { Builder } = require('selenium-webdriver');
const { expect } = require('chai');

let HomePage = require('../pages/homePage');
let ProductPage = require('../pages/productPage');
let SearchResultsPage = require('../pages/searchResultsPage');
let term = 'iphone';
let page = 'https://www.aliexpress.com';
let pageTwo = '2';

describe('Ali Express test', () => {
    const driver = new Builder().forBrowser('chrome').build();
    const homePage = new HomePage(driver);
    const productPage = new ProductPage(driver);
    const searchResultsPage = new SearchResultsPage(driver);

    it('should navigate to aliExpress page',  async () => {
        await homePage.getPage(page);
        expect(await driver.getCurrentUrl()).to.contain(page);
    });

    it('should search for iphones',  async () => {
        await homePage.search(term);
        expect(await driver.getCurrentUrl()).to.contain('SearchText=iphone');
    });
  
    it('should navigate to the second page', async () => {
        await searchResultsPage.searchPage(pageTwo);
        expect(await driver.getCurrentUrl()).to.contain('page=2');
    });
  
    it('should click on the second ad', async () => {
        await searchResultsPage.clickSecondAd();
    });
  
    it('should verify product stock', async () => {
        await homePage.goToSecondTab();
        await productPage.getProductQuantity();
        expect(number.split(' ')[0]).to.be.greaterThan(1);
    });

    it('should close driver', async () => {
        await driver.quit();
    });

});