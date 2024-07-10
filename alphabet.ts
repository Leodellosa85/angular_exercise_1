import PromptSync, * as promptSync from 'prompt-sync'

const prompt = PromptSync();

const getNextChar = (data: string) => {
    let result = "";
    for (let i = 0; i < input.length; i++) {
        let c = input[i];
        if (isNaN(parseInt(c))) {
            if (c == "z") {
                result += "a";
            } else if (c == "Z") {
                result += "A";
            } else {
                result += String.fromCharCode(c.charCodeAt(0) + 1);
            }
        } else {
            result += c;
        }
    }

    return result;
}

export const conVowUpp = (input: string) => {
    let result = "";

    for (let i = 0; i < input.length; i++) {
    	let c = input[i].toLowerCase();
    	if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
    		result += c.toUpperCase();
    	} else {
    		result += c.toLowerCase();
    	}
    }
    return result;
}

const input = prompt("Enter a String: ");

console.log(`${input} -> ` + conVowUpp(getNextChar(input)));

