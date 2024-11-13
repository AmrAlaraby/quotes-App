
// script.js

// Array of quotes, each as an object with "text" and "author"
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "The best way to predict your future is to create it.", author: "Peter Drucker" },
    // Add more quotes here
];

let lastRandomIndex;

// Function to get a new random index that isn't the same as the last one
function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastRandomIndex);
    lastRandomIndex = randomIndex;
    return quotes[randomIndex];
}

// Event listener for button click
document.getElementById("new-quote").addEventListener("click", function() {
    const randomQuote = getRandomQuote();
    document.getElementById("quote").textContent = randomQuote.text;
    document.getElementById("author").textContent = `- ${randomQuote.author}`;
});
