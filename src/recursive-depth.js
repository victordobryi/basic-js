const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    constructor() {
        this.count = 1;
        this.depthCount = 1;
    }

    // calculateDepth(arr) {
    //     if (Array.isArray(arr) == true) {
    //         1 + arr.reduce(function(a, b) {
    //             return Math.max.apply(a, this.calculateDepth(b));
    //         });
    //     } else return 0;

    // };

    calculateDepth(arr) {
        if (Array.isArray(arr) === true) {
            return 1 + arr.reduce((acc, value) => Math.max(this.calculateDepth(value), acc), 0);
        } else {
            return 0;
        }

    }



};