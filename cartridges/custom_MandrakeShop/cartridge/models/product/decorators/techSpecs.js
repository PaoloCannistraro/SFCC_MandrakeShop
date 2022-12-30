"use strict";

module.exports = function (object, product) {
  Object.defineProperty(object, "clockFrequency", {
    enumerable: true,
    value: product.custom.clockFrequency,
  });

  Object.defineProperty(object, "clockMemory", {
    enumerable: true,
    value: product.custom.clockMemory,
  });

  Object.defineProperty(object, "sizeMemory", {
    enumerable: true,
    value: product.custom.sizeMemory,
  });

  Object.defineProperty(object, "voltage", {
    enumerable: true,
    value: product.custom.voltage,
  });

  Object.defineProperty(object, "tdp", {
    enumerable: true,
    value: product.custom.tdp,
  });
};
