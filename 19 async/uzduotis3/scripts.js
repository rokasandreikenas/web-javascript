document.addEventListener("DOMContentLoaded", () => {
    function delay(time) {
        return new Promise((resolve) => {
            // Naudojame setTimeout išspręsti promisę po nurodyto laiko
            setTimeout(() => {
                resolve('Laikas praėjo'); // Išspręsti promisę su pranešimu
            }, time);
        });
    }
    
    // Naudojame funkciją delay su laiku 2000ms ir gauname rezultatą su then
    delay(2000).then((message) => {
        console.log(message); // 'Laikas praėjo'
    });
});