document.addEventListener("DOMContentLoaded", () => {
    function calculate(number, time, callback) {
        // Naudojame setTimeout imituoti asinchroninę operaciją
        setTimeout(() => {
            const result = number * 2; // Atlikti skaičiavimą (dvigubinimas)
            callback(result); // Iškviesti callback funkciją su rezultatu
        }, time);
    }
    
    function showResult(result) {
        console.log('Rezultatas:', result); // Spausdiname rezultatą į konsolę
    }
    
    // Naudojame funkciją calculate su skaičiumi 5, laiku 1000ms ir callback funkcija showResult
    calculate(5, 1000, showResult);
});  