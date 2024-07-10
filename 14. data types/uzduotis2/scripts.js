document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Declare variables
    let age = 20; // Change this value to test different ages
    let isCitizen = true; // Change this value to test different citizenship status
    let daysOfResidence = 40; // Change this value to test different days of residence

    // Step 2: Use if-else statements to determine voting eligibility
    if (age >= 18 && isCitizen && daysOfResidence >= 30) {
        console.log("You are eligible to vote.");
    } else if (age < 18) {
        console.log("You are not eligible to vote because you are under 18.");
    } else if (!isCitizen) {
        console.log("You are not eligible to vote because you are not a citizen.");
    } else if (daysOfResidence < 30) {
        console.log("You are not eligible to vote because you have not been a resident for at least 30 days.");
    }
});
  