document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById('content');
    const newParagraph = document.createElement('p');
    
    //: Set the text content of the new paragraph
    newParagraph.textContent = 'This is the new paragraph that has replaced the old one.';
    
    // Step 3: Replace the existing paragraph with the new paragraph
    const oldParagraph = document.getElementById('old-paragraph');
    contentDiv.replaceChild(newParagraph, oldParagraph);
});  