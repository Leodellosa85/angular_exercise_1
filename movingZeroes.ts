let data = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

export const moveZeroes = (data: string | any[]) => {
    let zeros = [];
    let others = [];
    let output = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] === 0) {
            zeros.push(data[i]);
        } else {
            others.push(data[i])
        }
    }
    
    output = others.concat(zeros);

    return console.log(output);
}

moveZeroes(data);