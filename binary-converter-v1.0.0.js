/**
 * Name: Binary Converter
 * Description: Decimal to Binary converter and vice versa built in JavaScript
 * Author: Shrikumar Infotech
 * License: GPLv2.0 or later
 * License Url: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

'use strict';

// Define bindary converter function
const binaryConverter = function(){
    // Return the functions
    return {
        decimalToBinary: function(number){
            // convert every bit of a number into bindary code
            // Define valiables
            let biNum = number; // save the input number
            let biOutputArr = []; // remainder storage array
            let biOutput = 0; // output value in bindary
            let temp = biNum; // buffer for divisible values
            const regxComma = /(?:,)/gi; // regx to replace "," with ""
            // loop through the value and calculate remainder value
            while( temp > 0 ){
                // save the divided value rounded and save into temp
                temp = Math.round(temp / 2);
                // push the remainder value in array (1/0)
                biOutputArr.push(Math.floor(biNum % 2));
                // get the decimal value and save for next calculation
                biNum = biNum / 2;
                // stop when value reaches to 1
                if(temp === 1){
                    temp = 0;
                    biOutput = biOutputArr.reverse();
                    biOutput = biOutputArr.toString().replace(regxComma, '') / 1; // convert into a number deviding by 1
                    return biOutput;
                }
            }
        },
        binaryToDecimal: function(number){
            // convert a binary number into decimal
            let binaryNum = number;
            let binaryString = binaryNum.toString();

            // result for output
            let decimalResult = 0;

            // iterate through each digit and after the calculation
            let count = 0;
            for(let i = (binaryString.length - 1); i >= 0; i--){
                // console.log(count);
                if(binaryString[i] !== '0'){
                    // iterate through each digit and devide by Math.pow(2, 0) from last digit to first digit
                    decimalResult += (Math.pow(2, count) / binaryString[i]);
                }
                count++;
                // reset count
                if(count > 5){
                    count = 0;
                }
            }

            // console.log(decimalResult);

            return decimalResult;
        }
    }
}


module.exports = binaryConverter;