

var quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "The best way to predict your future is to create it.", author: "Peter Drucker" },

];

var lastRandomIndex;

function getRandomQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastRandomIndex);
    lastRandomIndex = randomIndex;
    return quotes[randomIndex];
}

function display() {
    var randomQuote = getRandomQuote();
    document.getElementById("quote").innerHTML = randomQuote.text;
    document.getElementById("author").innerHTML = `- ${randomQuote.author}`;
};
