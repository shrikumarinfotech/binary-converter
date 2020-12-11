# Binary Converter:
Plugin to convert decimal to binary and vice versa using JavaScript

# Usage:

## import the binary converter plugin
```
const binaryConverter = require('./binary-converter-v1.0.0');
```

## convert a decimal value into binary
```
const binaryVal = binaryConverter().decimalToBinary(56);
console.log(binaryVal); // expeted output: 111000
```

## convert a binary digit into decimal
```
const decimalVal = binaryConverter().binaryToDecimal(111000);
console.log(decimalVal); // expected output: 56
```