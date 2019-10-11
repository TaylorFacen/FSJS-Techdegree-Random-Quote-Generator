/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

var quotes = [
  {
    quote: "While we may not always have control over our options, we always have control over how we choose among them.",
    "source": "Greg McKeown",
    "citation": "Essentialism",
    "year": 2014
  },
  {
    quote: "Mindfulness is simply the art of deliberately doing on ething at a time.",
    "source": "Chris Baily",
    "citation": "The Productivity Project",
    "year": 2016
  },
  {
    quote: "We must have faith in God's timing, especially when it's scary. We must have faith in the process.",
    "source": "Valeisha Butterfield Jones",
    "citation": "The Girlprint",
    "year": 2014
  },
  {
    quote: "Our thoughts become our words, out words become our beliefs, our beliefs become our actions, our actions become our habits, and our habits beccome our realities.",
    "source": "Jen Sincero",
    "citation": "You are a Badass",
    "year": 2013
  },
  {
    quote: "Everyone on earth was carrying around an unseen history, and that alone deserves some tolerance.",
    "source": "Michelle Obama",
    "citation": "Becoming",
    "year": 2018
  }
]




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.