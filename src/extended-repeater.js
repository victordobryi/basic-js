const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    if (options.separator == undefined) {
        options.separator = '+';
    }
    if (options.additionSeparator == undefined) {
        options.additionSeparator = '|';
    }

    if (options.repeatTimes == null || options.repeatTimes == undefined) {
        options.repeatTimes = 1;
    }
    if (options.additionRepeatTimes == null || options.additionRepeatTimes == undefined) {
        options.additionRepeatTimes = 1;
    }

    if (options.hasOwnProperty('addition') == false) {
        options.addition = '';
    }


    return (((str + ((options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition)) + options.separator).repeat(options.repeatTimes - 1)) + ((str + ((options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition)));
};