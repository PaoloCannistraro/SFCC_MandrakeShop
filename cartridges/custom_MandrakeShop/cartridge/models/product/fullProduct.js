'use strict';

var descriptionDecorator = require('*/cartridge/models/product/decorators/techSpecs');

var base = module.superModule;

/**
 * Decorate an object(account model) with wishlist information
 * @param {Object} object - account Model to be decorated
 * @param {dw.customer.ProductList} product - Current product
 *
 * @returns {Object} - Decorated product model
 */
module.exports = function fullProduct(object, apiProduct, product) {
    base.call(product, apiProduct, options);
    descriptionDecorator(object, product);
    return object;
};
