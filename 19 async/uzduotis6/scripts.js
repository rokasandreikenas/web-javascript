document.addEventListener("DOMContentLoaded", () => {
    async function fetchData() {
        try {
            // Naudojame await laukti fetch atsakymo
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json(); // Paverčiame atsakymą į JSON
            return data; // Grąžiname gautus duomenis
        } catch (error) {
            console.error('Klaida:', error); // Gaudome klaidas
            throw error; // Perduodame klaidą toliau
        }
    }
    
    // Naudojame funkciją fetchData ir gauname rezultatą su then
    fetchData().then((data) => {
        console.log('Gauti duomenys:', data);
    }).catch((error) => {
        console.error('Klaida gaunant duomenis:', error);
    });
});