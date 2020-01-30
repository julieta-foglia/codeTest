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

ProductPage.prototype.getProductQuantity = function() {
    this.waitUntilVisible(PRODUCT_QUANTITY);
    number = this.findElement(PRODUCT_QUANTITY).getText();
    number = number.split(' ');
    return number[1];
};

module.exports = ProductPage;


