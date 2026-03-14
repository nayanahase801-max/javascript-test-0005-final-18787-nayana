# javascript-test-0005-final-18787-nayana
Final Project Assignment - This repository contains the complete final project code and documentation.


let currentNumber = 1; 
const totalRows = 5;   
for (let i = 1; i <= totalRows; i++) {
    let rowContent = ""; 
 for (let j = 1; j <= i; j++) {
        rowContent += currentNumber + " ";
        currentNumber++; 
    }
  console.log(rowContent.trim());
}
