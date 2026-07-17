document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitbtn").onclick = function() {
        const cardnumber = document.getElementById("cardnum").value;
        const result = document.getElementById("result-message");

        if (validateLuhn(cardnumber)) {
            result.innerText = "Valid Card Number";
            result.style.color = "#00ff00"; 
        } else {
            result.innerText = "Invalid Card Number";
            result.style.color = "#ff0000"; 
        }
    };
});

function validateLuhn(n) {
    /*
    This function implements the Luhn algorithm

    - reads card numbers from right to left
    - doubles every other number
    - if length of numbers is odd, start with second index. Otherwise first index.
    - if a number is greater than 9, it replaces that number with the sum of the digits that make up that number
    
    */
    let digits = [];

    for (let num of String(n)) {
        digits.push(Number(num));
    }

    let length = digits.length;

    let start;
    if (length % 2 == 0) {
        start = 0;
    } else {
        start = 1;
    }

    for (let i = start; i < length; i += 2) {
        digits[i] *= 2;
    }

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] > 9) {
            digits[i] = Array.from(String(digits[i]), Number).reduce((a, b) => a + b, 0);
        }
    }
            
    let digits_sum = digits.reduce((a, b) => a + b, 0);
    
    return digits_sum % 10 == 0;
}