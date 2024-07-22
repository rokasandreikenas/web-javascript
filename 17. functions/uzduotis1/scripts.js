document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById('myButton1');
    const button2 = document.getElementById('myButton2');

    button1.addEventListener('click', () => {
        alert('Paspaudėte mygtuką su ID: myButton1');
    });

    button2.addEventListener('click', () => {
        alert('Paspaudėte mygtuką su ID: myButton2');
    });
});  