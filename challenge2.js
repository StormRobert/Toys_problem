const prompt = require("prompt-sync")()

//getting the speed limit for 70 
function getDemerits(speed) {
    if (speed <= 70) {
       return "Ok!!";
       
    }
   
    const overSpeed = speed - 70;
    const demerits = Math.floor(overSpeed / 5);

  // suspending license condition
    if (demerits > 12) {
       return "License suspended";
    }
   
    return `Points: ${demerits}`;
   }
   
   console.log(getDemerits(80)); // oiutput: points: 2 less than 12
   console.log(getDemerits(90)); // output :points: 4 which is less than 12
   console.log(getDemerits(120)); // Output: Points: 10 which is less than 12
   console.log(getDemerits(160)); // Points: 18 greater than 12 => license suspended
   
