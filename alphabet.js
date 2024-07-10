"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conVowUpp = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const getNextChar = (data) => {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let c = input[i];
        if (isNaN(parseInt(c))) {
            if (c == "z") {
                result += "a";
            }
            else if (c == "Z") {
                result += "A";
            }
            else {
                result += String.fromCharCode(c.charCodeAt(0) + 1);
            }
        }
        else {
            result += c;
        }
    }
    return result;
};
const conVowUpp = (input) => {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let c = input[i].toLowerCase();
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            result += c.toUpperCase();
        }
        else {
            result += c.toLowerCase();
        }
    }
    return result;
};
exports.conVowUpp = conVowUpp;
const input = prompt("Enter a String: ");
console.log(`${input} -> ` + (0, exports.conVowUpp)(getNextChar(input)));
