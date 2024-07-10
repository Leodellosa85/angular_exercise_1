"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeroes = void 0;
let data = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
const moveZeroes = (data) => {
    let zeros = [];
    let others = [];
    let output = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 0) {
            zeros.push(data[i]);
        }
        else {
            others.push(data[i]);
        }
    }
    output = others.concat(zeros);
    return console.log(output);
};
exports.moveZeroes = moveZeroes;
(0, exports.moveZeroes)(data);
