document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById('textInput');
    const outputText = document.getElementById('outputText');

    textInput.addEventListener('keydown', (event) => {
        console.log('Paspaustas klavišas: ' + event.key);
        outputText.innerText = 'You pressed the key: ' + event.key;
        if (event.key === 'Enter') {
            textInput.value = '';
            console.log('Enter key was pressed, input cleared');
        }
    });
});  