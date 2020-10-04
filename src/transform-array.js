const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) { throw Error('Not array'); }
    let result = [...arr];
    for (let i = 0; i < result.length; ++i) {
        if (result[i] === '--discard-next') {
            if (result[i + 1] !== undefined) {
                result[i + 1] = Number.MAX_VALUE;
            }
            result[i] = Number.MAX_VALUE;
        } else if (result[i] === '--discard-prev') {
            if (result[i - 1] !== undefined) {
                result[i - 1] = Number.MAX_VALUE;
            }
            result[i] = Number.MAX_VALUE;
        } else if (result[i] === '--double-next') {
            if (result[i + 1] !== undefined) {
                result.splice(i + 1, 0, result[i + 1]);
            }
            result.splice(i, 1);
        } else if (result[i] === '--double-prev') {
            if (result[i - 1] !== undefined) {
                result.splice(i - 1, 0, result[i - 1]);
            }
            if (i !== 0) {
                result.splice(i + 1, 1);
            } else {
                result.splice(i, 1);
            }
        }
    }
    for (let i = result.length; i >= 0; --i) {
        if (Number.MAX_VALUE == result[i]) {
            result.splice(i, 1);
        }
    }
    return result;
};




// let newArr = arr;
// let next = '--discard-next';
// let prev = '--discard-prev';
// let doubleNext = '--double-next';
// let doublePrev = '--double-prev';
// if (Array.isArray(arr) == true) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == next) {
//             if ((arr[i + 1] !== undefined || arr[i + 2]) !== prev || arr[i + 2] !== doublePrev) {
//                 newArr.splice(i, 2);
//             }
//         } else if (arr[i] == prev) {
//             if (arr[i - 1] !== undefined) {
//                 newArr.splice(i - 1, 2);
//             } else if (arr[i - 2] == next || arr[i - 2] == doubleNext) {
//                 newArr.splice(i, 1);
//             } else {
//                 newArr.splice(i, 1);
//             }
//         } else if (arr[i] == doubleNext) {
//             if (arr[i + 1] !== undefined) {
//                 newArr.splice(i, 1);
//                 newArr.push(arr[i + 1]);
//             } else if (arr[i + 2] === prev || arr[i + 2] == doublePrev) {
//                 newArr.splice(i, 1);
//             } else {
//                 newArr.splice(i, 1);
//             }
//         } else if (arr[i] == doublePrev) {
//             if (arr[i - 1] !== undefined && arr[i - 2] !== next && arr[i - 2] !== doubleNext) {
//                 newArr.splice(i, 1);
//                 newArr.push(arr[i - 1]);
//             } else if (arr[i - 2] === next || arr[i - 2] == doubleNext) {
//                 newArr.splice(i, 1);
//             } else
//                 newArr.splice(i, 1);

//         }
//     }
// } else {
//     throw new Error('THROW');
// }
// return newArr;