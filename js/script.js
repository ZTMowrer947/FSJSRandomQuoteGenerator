/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
Recommended: (I plan to do this but I am finding difficulty in finding either of these at the moment) 
- Add at least one `year` and/or `citation` property to at least one quote object.
***/

// Define array of quotes
let quotes = [
    {
        // The quote itself
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        
        // The source/speaker of the quote
        source: "Franklin D. Roosevelt",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        source: "Mahatma Gandhi",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        source: "Thomas Edison",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        source: "Aristotle",
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        source: "Steve Jobs",
    },
    {
        quote: "If you can dream it, you can do it.",
        source: "Walt Disney",
    },
    {
        quote: "Most people spend more time and energy going around problems than in trying to solve them.",
        source: "Henry Ford",
    },
    {
        quote: "The direction in which education starts a man will determine his future in life.",
        source: "Plato",
    },
    {
        quote: "When anger rises, think of the consequences.",
        source: "Confucius",
    },
    {
        quote: "However difficult life may seem, there is always something you can do and succeed at.",
        source: "Stephen Hawking", // RIP 1/8/1942 - 3/14/2018
    },
];

// Random Number Generation
// Generates a random number based from 0 to 1 less than the length of the quotes array
function generateRandomArrayIndex() {
    // Get length of array
    let max = quotes.length;

    // Generate number between 0 and array length - 1
    return Math.floor(Math.random() * max); 
}

// Random Quote Getter
// Retrieves a random quote using a random index.
function getRandomQuote() {
    // Generate index
    let index = generateRandomArrayIndex(quotes);

    // Return quote at index
    return quotes[index];
}

/***
 Create the `printQuote` function to: 
- call the `getRandomQuote` function and assign it to a variable.
- use the properties of the quote object stored in the variable to 
    create your HTML string.
- use conditionals to make sure the optional properties exist before 
    they are added to the HTML string.
- set the `innerHTML` of the `quote-box` div to the HTML string. 
***/



/***
 When the "Show another quote" button is clicked, the event listener 
below will be triggered, and it will call, or "invoke", the `printQuote` 
function. So do not make any changes to the line of code below this 
comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);