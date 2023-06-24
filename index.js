// Code your solutions in this file
function countDown(number){
     // Keep looping as long as the number is greater than or equal to 0
    while (number >= 0){
        // Print the current value of the number
        console.log(number);
        number--; //Decrement by 1
    }
}
console.log(countDown(10));