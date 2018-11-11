/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
Add at least five quote objects to the `quotes` array.
Give each quote object a `quote` and `source` property.

Recommended: 
- Add at least one `year` and/or `citation` property to at least one quote object.
***/

// Define array of quotes
let quotes = [
    {
        // Quote
    },
    {
        // Quote 2
    },
    {
        // Quote 3
    },
    {
        // Quote 4
    },
    {
        // Quote 5
    },
    {
        // Quote 6
    },
    {
        // Quote 7
    },
    {
        // Quote 8
    },
    {
        // Quote 9
    },
    {
        // Quote 10
    },
];




/***
 Create the `getRandomQuote` function to:
- generate a random number 
- use the random number to `return` a random quote object from the 
    `quotes` array.
***/




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