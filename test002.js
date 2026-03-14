let n = 5;

for (let i = n - 1; i >= 0; i--) {
    let row = "";
    let num = 1;

   
    for (let s = 0; s < n - 1 - i; s++) {
        row += " ";
    }


    for (let j = 0; j <= i; j++) {
        row += num + " ";
        num = num * (i - j) / (j + 1);
    }

    console.log(row);
}
