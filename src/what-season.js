const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if (date === undefined) {
        return 'Unable to determine the time of year!';
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error('THROWN');
    }

    let currentMonth = date.getMonth();
    if (currentMonth == '0' || currentMonth == '1' || currentMonth == '11') {
        return 'winter';
    } else if (currentMonth == '2' || currentMonth == '3' || currentMonth == '04') {
        return 'spring';
    } else if (currentMonth == '5' || currentMonth == '6' || currentMonth == '7') {
        return 'summer';
    } else if (currentMonth == '8' || currentMonth == '9' || currentMonth == '10') {
        return 'autumn';
    } else {
        return 'Unable to determine the time of year!';
    }



};