document.addEventListener("DOMContentLoaded", () => {
    function conditionalDelay(time, shouldResolve) {
        return new Promise((resolve, reject) => {
            // Naudojame setTimeout išspręsti arba atmesti promisę po nurodyto laiko
            setTimeout(() => {
                if (shouldResolve) {
                    resolve('Sėkmė!'); // Išspręsti promisę
                } else {
                    reject('Klaida!'); // Atmesti promisę
                }
            }, time);
        });
    }
    
    // Naudojame funkciją conditionalDelay su laiku 2000ms ir boolean true
    conditionalDelay(2000, true).then((message) => {
        console.log(message); // 'Sėkmė!'
    }).catch((error) => {
        console.error(error); // 'Klaida!'
    });
    
    // Naudojame funkciją conditionalDelay su laiku 2000ms ir boolean false
    conditionalDelay(2000, false).then((message) => {
        console.log(message);
    }).catch((error) => {
        console.error(error); // 'Klaida!'
    });
});