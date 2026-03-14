# javascript-test-0004-final-18787-nayana
Final Project Assignment - This repository contains the complete final project code and documentation.

let n = 4;  

for (let i = 0; i < 2 * n - 1; i++) {
    let row = "";

    for (let j = 0; j < 2 * n - 1; j++) {
        let value = n - Math.min(
            Math.min(i, j),
            Math.min(2 * n - 2 - i, 2 * n - 2 - j)
        );

        row += value + " ";
    }

    console.log(row);
}
