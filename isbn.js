"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isISBN = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const isISBN = (isbn) => {
    if (isbn.length !== 10) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        const digit = parseInt(isbn[i]);
        if (isNaN(digit)) {
            return false;
        }
        if (digit < 0 || digit > 9) {
            return false;
        }
        sum += digit * (i + 1);
    }
    const lastDigit = isbn[9];
    const digit = lastDigit === 'X' ? 10 : parseInt(lastDigit);
    if (isNaN(digit)) {
        return false;
    }
    if (digit < 0 || digit > 10) {
        return false;
    }
    sum += digit * 10;
    return sum % 11 === 0;
};
exports.isISBN = isISBN;
const name = prompt("Enter ISBN-10 digit number: ");
console.log(`${name} -> ` + (0, exports.isISBN)(name));
