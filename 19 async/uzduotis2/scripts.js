document.addEventListener("DOMContentLoaded", () => {
    function processList(list, callback) {
        const results = [];
        let count = 0;
    
        function processItem(index) {
            if (index < list.length) {
                // Naudojame setTimeout imituoti asinchroninę operaciją
                setTimeout(() => {
                    results.push(list[index] * 2); // Apdoroti elementą (dvigubinimas)
                    count++;
                    if (count === list.length) {
                        callback(results); // Iškviesti callback funkciją su galutiniu sąrašu
                    } else {
                        processItem(index + 1); // Apdoroti kitą elementą
                    }
                }, 1000);
            }
        }
    
        processItem(0);
    }
    
    function showResults(results) {
        console.log('Galutinis sąrašas:', results); // Spausdiname galutinį sąrašą į konsolę
    }
    
    // Naudojame funkciją processList su sąrašu [1, 2, 3, 4, 5] ir callback funkcija showResults
    processList([1, 2, 3, 4, 5], showResults);
});  