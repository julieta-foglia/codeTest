const HomePage = require('../pages/homePage.js');

const webdriver = require('selenium-webdriver');
const By = webdriver.By;

const PRODUCT_QUANTITY = By.css('div.product-quantity-tip span');

function ProductPage(webdriver) {
    HomePage.call(this, webdriver);
}

ProductPage.prototype = Object.create(HomePage.prototype);
ProductPage.prototype.constructor = ProductPage;

ProductPage.prototype.getProductQuantity = async function() {
    const result = await this.findElement(PRODUCT_QUANTITY);
    return result.getText();
};

module.exports = ProductPage;


