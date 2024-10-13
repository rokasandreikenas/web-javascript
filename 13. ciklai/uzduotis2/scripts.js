document.addEventListener("DOMContentLoaded", () => {
    const numbers = [1, 3, 7, 8, 2, 10, 4, 5, 6, 9];
    let total = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 5) {
            total += numbers[i];
        }
    }
    
    console.log(`Total sum of numbers greater than 5: ${total}`);    
});  