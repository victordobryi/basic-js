const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(mode = true) {
        this.mode = mode;
    }
    encrypt(message, key) {
        if (message == undefined || key == undefined) {
            throw new Error('THROW!');
        }
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let splitMessage = message.toUpperCase().split('');
        let withOutSpace = message.replace(/\s+/g, '').toUpperCase().split('');
        let splitKey = key.toUpperCase().split('');
        let encryptArr = [];
        if (!this.mode) {
            withOutSpace = message.replace(/\s+/g, '').toUpperCase().split('').reverse();
        }
        for (let i = 0; i < splitMessage.length; i++) {
            if (splitKey.length < withOutSpace.length) {
                splitKey.push(splitKey[i]);
            }
            if (alphabet.includes(withOutSpace[i])) {
                let currentIndex = ((alphabet.indexOf(withOutSpace[i]) + alphabet.indexOf(splitKey[i])) % 26);
                encryptArr.push(alphabet[currentIndex]);
            } else {
                encryptArr.push(withOutSpace[i]);
                // splitKey.splice(i + 1, 0, i);
            }

            if (splitMessage[i] == ' ') {
                encryptArr.splice(i, 0, " ")
            }
        }
        return encryptArr.join('');

    }
    decrypt(message, key) {
        if (message == undefined || key == undefined) {
            throw new Error('THROW!');
        }
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let splitMessage = message.toUpperCase().split('');
        let withOutSpace = message.replace(/\s+/g, '').toUpperCase().split('');
        let splitKey = key.toUpperCase().split('');
        let encryptArr = [];
        if (!this.mode) {
            withOutSpace = message.replace(/\s+/g, '').toUpperCase().split('').reverse();
        }
        for (let i = 0; i < splitMessage.length; i++) {
            if (splitKey.length < withOutSpace.length) {
                splitKey.push(splitKey[i]);
            }
            if (alphabet.includes(withOutSpace[i])) {
                let currentIndex = (((alphabet.indexOf(withOutSpace[i]) - alphabet.indexOf(splitKey[i])) + 26) % 26);
                encryptArr.push(alphabet[currentIndex]);
            } else {
                encryptArr.push(withOutSpace[i]);
                // splitKey.splice(i + 1, 0, i);
            }

            if (splitMessage[i] == ' ') {
                encryptArr.splice(i, 0, " ")
            }
        }
        return encryptArr.join('');
    }

}

module.exports = VigenereCipheringMachine;