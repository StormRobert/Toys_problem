const prompt = require("prompt-sync")()

function getDemerits(speed) {
    if (speed < 70) {
       return "Okay You're good Sir!!";
    }
   
    const overSpeed = speed - 70;
    const demerits = Math.floor(overSpeed / 5);
   
    if (demerits > 12) {
       return "License suspended";
    }
   
    return `Points: ${demerits}`;
   }
   
   console.log(getDemerits(80));
   console.log(getDemerits(90)); 
   console.log(getDemerits(120)); // Output: Points: 10 which is less than 12
   console.log(getDemerits(160)); // Points: 18 greater than 12 => license suspended
   
