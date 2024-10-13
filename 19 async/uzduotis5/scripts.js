document.addEventListener("DOMContentLoaded", () => {
    function delay(time) {
        return new Promise((resolve) => {
            // Naudojame setTimeout išspręsti promisę po nurodyto laiko
            setTimeout(() => {
                resolve();
            }, time);
        });
    }
    
    async function waitForMessage(time) {
        await delay(time); // Laukiame nurodyto laiko
        return 'Laikas praėjo'; // Grąžiname pranešimą
    }
    
    // Naudojame funkciją waitForMessage su laiku 2000ms ir gauname rezultatą su then
    waitForMessage(2000).then((message) => {
        console.log(message); // 'Laikas praėjo'
    });
});