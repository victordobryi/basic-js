const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    numActivity = +sampleActivity;
    if (typeof numActivity === Number) {
        k = 0.693 / HALF_LIFE_PERIOD;
        t = Math.log2(MODERN_ACTIVITY / numActivity) / k;
    } else {
        return false;
    }

};