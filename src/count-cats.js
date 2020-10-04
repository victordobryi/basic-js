const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    const catsTails = backyard.flat();
    var count = 0;
    for (var i = 0; i < catsTails.length; i++) {
        if (catsTails[i] === "^^") {
            count = count + 1;
        }
    }
    return count;
    // return backyard.flat().filter(element => element === '^^').length;
};