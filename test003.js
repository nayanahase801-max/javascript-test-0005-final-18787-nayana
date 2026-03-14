let rows = 6;

for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        if ((i + j) % 2 === 0) {
            row += "1 ";
        } else {
            row += "0 ";
        }
    }

    console.log(row);
}
