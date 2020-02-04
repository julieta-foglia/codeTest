const HomePage = require('../pages/homePage.js');

const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const key = webdriver.Key;

const PRODUCT_QUANTITY = By.css('.product-quantity-tip span');
let number;

function ProductPage(webdriver) {
    HomePage.call(this, webdriver);
}

ProductPage.prototype = Object.create(HomePage.prototype);
ProductPage.prototype.constructor = ProductPage;

ProductPage.prototype.getProductQuantity = async function() {
    await this.waitUntilVisible(PRODUCT_QUANTITY);
    return await this.findElement(PRODUCT_QUANTITY).getText();
};

module.exports = ProductPage;


