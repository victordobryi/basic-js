const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let team = [];
    if (members == null) {
        return false;
    }
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            const newArr = members[i].trim().split('');
            team.push(newArr[0]);
        }
    }
    return team.join('').toUpperCase().split('').sort().join('');

};