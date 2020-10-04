const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        1 + (arr instanceof Array ? arr.reduce(function(max, item) {
            return Math.max(max, calculateDepth(item));
        }, 0) : -1);
    }
};