// Function to initialize typing animation
function typeAnimation() {
    const words = ["Seeds, fertilizers, Pest Contol, Gardening tools, Gardening Supplies"]; // Array of words to display
    const typingSpan = document.querySelector('.typing'); // Select the span element

    let wordIndex = 0; // Initialize index of current word
    let charIndex = 0; // Initialize index of current character in word

    function type() {
        if (charIndex < words[wordIndex].length) {
            typingSpan.textContent += words[wordIndex].charAt(charIndex); // Append next character
            charIndex++;
            setTimeout(type, 100); // Typing speed: Adjust as needed
        } else {
            setTimeout(erase, 1000); // Pause before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingSpan.textContent = words[wordIndex].substring(0, charIndex - 1); // Remove last character
            charIndex--;
            setTimeout(erase, 50); // Erasing speed: Adjust as needed
        } else {
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word
            setTimeout(type, 500); // Pause before typing next word
        }
    }

    setTimeout(type, 1000); // Start typing after 1 second
}

// Call the function to start typing animation
typeAnimation();

//hide div section
function homeLoadMore() {
    var div = document.getElementById('homeLoadMore');
    div.classList.toggle('hide-by-default');
}
