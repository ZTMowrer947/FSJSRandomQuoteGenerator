// Treehouse FSJS Techdegree Unit 1 Project
// Random Quote Generator

// Define array of quotes
let quotes = [
    {
        // The quote itself
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        
        // The source/speaker of the quote
        source: "Franklin D. Roosevelt",

        // Web URL where quote was found
        foundAt: "https://www.brainyquote.com/quotes/franklin_d_roosevelt_101840",

        // List of tags related to the quote
        tags: [
            "hang",
            "reach",
        ],
    },
    {
        quote: "You must be the change that you wish to see in the world.",
        source: "Mahatma Gandhi",
        foundAt: "https://www.brainyquote.com/quotes/mahatma_gandhi_109075",
        tags: [
            "wish",
            "change",
            "world",
        ],
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        source: "Thomas Edison",
        foundAt: "https://www.brainyquote.com/quotes/thomas_a_edison_149049?src=t_motivational",
        tags: [
            "success",
            "try",
        ],
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        source: "Aristotle",
        foundAt: "https://www.brainyquote.com/quotes/aristotle_119068",
        tags: [
            "darkness",
            "light",
            "focus",
        ],
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        source: "Steve Jobs",
        foundAt: "https://www.brainyquote.com/quotes/steve_jobs_173474",
        tags: [
            "leader",
            "innovation",
        ],
    },
    {
        quote: "If you can dream it, you can do it.",
        source: "Walt Disney",
        foundAt: "https://www.brainyquote.com/quotes/walt_disney_130027?src=t_motivational",
        tags: [
            "dream",
            "do",
        ],
    },
    {
        quote: "Most people spend more time and energy going around problems than in trying to solve them.",
        source: "Henry Ford",
        foundAt: "https://www.brainyquote.com/quotes/henry_ford_385983",
        tags: [
            "solve",
            "time",
            "energy",
            "problems",
        ],
    },
    {
        quote: "The direction in which education starts a man will determine his future in life.",
        source: "Plato",
        foundAt: "https://www.brainyquote.com/quotes/plato_384971",
        tags: [
            "education",
            "direction",
            "future",
            "life",
        ],
    },
    {
        quote: "When anger rises, think of the consequences.",
        source: "Confucius",
        foundAt: "https://www.brainyquote.com/quotes/confucius_132199",
        tags: [
            "anger",
            "consequence",
        ]
    },
    {
        quote: "However difficult life may seem, there is always something you can do and succeed at.",
        source: "Stephen Hawking", // RIP 1/8/1942 - 3/14/2018
        foundAt: "https://www.brainyquote.com/quotes/stephen_hawking_627103",
        tags: [
            "difficult",
            "suceed",
            "do",
            "always",
        ],
    },
    {
        quote: "The best is the enemy of the good.",
        source: "Voltaire",
        citation: "Dictionnaire philosophique",
        year: 1764,
        foundAt: "https://en.wikipedia.org/wiki/Perfect_is_the_enemy_of_good",
        tags: [
            "enemy",
            "good",
            "best",
        ],
    },
];

// Random Number Generation
// Generates a random number based from 0 (inclusive) to the given maximum (exclusive)
function generateRandomNumberBetweenZeroAnd(max) {
    // Generate number between 0 and maximum
    return Math.floor(Math.random() * max); 
}

// Random Quote Retriever
// Retrieves a random quote using a random index.
function getRandomQuote() {
    // Generate random number between 0 and quote array length
    let index = generateRandomNumberBetweenZeroAnd(quotes.length);

    // Return quote at index
    return quotes[index];
}

// Set random background color
// Thanks to https://www.paulirish.com/2009/random-hex-color-code-snippets/ for helping with
// the hex conversion
// Also thanks to https://www.w3schools.com/js/js_htmldom_css.asp for setting CSS styles in JavaScript
function randomBackgroundColor() {
    // 16 values per hexadecimal digit
    let valuesPerHexDigit = 16;

    // Array to hold hexadecimal digits;
    let hexDigits = [];

    // Randomly generate six hex digits and place them into hexDigits array as a hexadecimal digit
    for (let i = 0; i < 6; i++) {
        let hex = generateRandomNumberBetweenZeroAnd(valuesPerHexDigit);

        hexDigits.push(hex.toString(16));
    }

    // Join hexadecimal digits into string with prepended hash
    let colorHex = "#" + hexDigits.join("");

    // Get body element
    let body = document.querySelector("body");

    // Get loadQuote button
    let loadQuote = document.getElementById('loadQuote');

    // Set background color on both
    body.style.backgroundColor = colorHex;
    loadQuote.style.backgroundColor = colorHex;
}

// Set initial quote timeout
let quoteTimeout = setTimeout(printQuote, 30000);

// Quote printing function
function printQuote() {
    // Clear any timeout remaining
    clearTimeout(quoteTimeout);

    // Get random quote
    let quote = getRandomQuote();

    // Concatenate quote into HTML string
    let quoteHtml = "<p class=\"quote\">" + quote.quote + "</p>";

    // Append source to HTML string
    quoteHtml += "<p class=\"source\">" + quote.source;


    // Append citation if quote has one
    if (quote.citation) {
        quoteHtml +=
            "<span class=\"citation\">" +
            quote.citation +
            "</span>";
    }

    // Append year if quote has one
    if (quote.year) {
        quoteHtml +=
            "<span class=\"year\">" +
            quote.year +
            "</span>";
    }

    // Close HTML element
    quoteHtml += "</p>";

    // Append URL quote was found at
    quoteHtml +=
        "<a class=\"foundAt\" href=\"" + quote.foundAt + "\" target=\"_blank\">" +
        quote.foundAt +
        "</a>";

    // Append start of tags field
    quoteHtml += "<p class=\"tags\">Tags: ";

    // Append each tag
    quote.tags.forEach(function(tag, index) {
        quoteHtml += tag;

        // Add comma if index is less than array length - 1
        if (index < quote.tags.length - 1) {
            quoteHtml += ", ";
        }
    });

    // End tags field and HTML string
    quoteHtml += "</p>";

    // Get quote-box div
    let quoteBox = document.getElementById("quote-box");

    // Set innerHTML to HTML string
    quoteBox.innerHTML = quoteHtml;

    // Set random background color
    randomBackgroundColor();

    // Reset quote timeout
    quoteTimeout = setTimeout(printQuote, 30000);
}

// Get loadQuote button
let loadQuote = document.getElementById('loadQuote');

// Call printQuote function when loadQuote button is clicked
loadQuote.addEventListener("click", printQuote, false);


// Thanks for these next two event listeners go to
// https://www.quirksmode.org/js/events_mouse.html for the mouseenter and mouseleave events

// Set loadQuote to have translucent white background color when hovered over
loadQuote.addEventListener("mouseenter", function() {
    loadQuote.style.backgroundColor = "rgba(255, 255, 255, .25)"; // White with 25% opacity
}, false);

// Set loadQuote to have same background color as body when hovering ends
loadQuote.addEventListener("mouseleave", function() {
    // Get body element
    let body = document.querySelector("body");

    // Set button background color to match that of body
    loadQuote.style.backgroundColor = body.style.backgroundColor;
}, false);

// Load quote on page load
window.onload = printQuote;
