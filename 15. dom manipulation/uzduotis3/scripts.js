document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('actionButton').addEventListener('click', function() {
        const text = document.getElementById('text');
        const parentDiv = document.getElementById('parentDiv');
        const box = document.getElementById('box');
        const status = document.getElementById('status');

        // Change the text of the first <p> element
        text.innerText = "This text has been changed!"
        // Replace the child <p> of the second <div> with a <span> element
        parentDiv.innerHTML = '<span>:)</span>';
        // Change the background color of the third <div> element
        box.style.backgroundColor = 'green';
        
        // Check if all conditions are met
        if (text.innerText === "This text has been changed!" &&
            parentDiv.querySelector('span') !== null &&
            box.style.backgroundColor === 'green') {
            status.innerText = "Complete";
            status.style.color = 'green';
        } else {
            console.log('Operation failed!')
        }
    });
});