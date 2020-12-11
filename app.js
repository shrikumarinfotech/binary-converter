/**
 * Name: Binary Converter
 * Description: Decimal to Binary converter built in JavaScript
 * Author: Shrikumar Infotech
 * License: GPLv2.0 or later
 * License Url: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

'use strict';

// import the binary converter plugin
const binaryConverter = require('./binary-converter-v1.0.0');

// convert a decimal value into binary
const binaryVal = binaryConverter().decimalToBinary(56);
console.log(binaryVal);

// convert a binary digit into decimal
const decimalVal = binaryConverter().binaryToDecimal(111000);
console.log(decimalVal);