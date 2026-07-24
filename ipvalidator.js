document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitbtn").onclick = function() {
        const cardnumber = document.getElementById("ipaddress").value;
        const result = document.getElementById("result-message");

        if (validateIP(cardnumber)) {
            result.innerText = "Valid IP Address";
            result.style.color = "#00ff00"; 
        } else {
            result.innerText = "Invalid IP Address";
            result.style.color = "#ff0000"; 
        }
    };
});

function validateIP(n) {
    /*
    This function checks for a valid IP address

    - counts dots
    - checks if number of dots equals 3
    - checks if numbers are within range.
    - checks for trailing zeros
    
    */
    let dotcount = 0;

    for (let ch of n) {
        if (ch === ".")
        dotcount += 1;
    }
    if(dotcount != 3) {
        return false;
    }

    const ipArray = n.split(".");
    const allAreDigits = ipArray.every(segment => /^\d+$/.test(segment));
    
    if(!allAreDigits) {
        return false;
    }
    if (ipArray.length !== 4) {
        return false;
    }


    for (let snum of ipArray) {
        if (snum.length > 1 && snum[0] == "0") {
            return false
        }
        let num = Number(snum);

        if (num < 0 || num > 255){
            return false
        }
    }
    return true;
}