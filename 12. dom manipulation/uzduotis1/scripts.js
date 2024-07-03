document.addEventListener("DOMContentLoaded", () => {
    // Change the text content of the paragraph
    document.getElementById('text-paragraph').innerHTML = 'The text has been changed!';

    // Change the style of the div
    var styleDiv = document.getElementById('style-div');
    styleDiv.style.backgroundColor = 'blue';
    styleDiv.style.width = '200px';
    styleDiv.style.height = '200px';
});  