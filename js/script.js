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
    quote: "Mindfulness is simply the art of deliberately doing one thing at a time.",
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

function getRandomNumber(ceiling) {
  var randomNumber = Math.floor(Math.random() * ceiling)
  return randomNumber
}

function getRandomQuote(quotes) {
  var index = getRandomNumber(quotes.length)
  var quote = quotes[index]
  return quote
}

function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var message = "";

  // build HTML
  message += "<p class = \"quote\">" + randomQuote.quote + "</p>";
  message += "<p class = \"source\">" + randomQuote.source;

  if (randomQuote.citation) {
    message += "<span class = \"citation\">" + randomQuote.citation + "</span>";
  }

  if (randomQuote.year) {
    message += "<span class = \"year\">" + randomQuote.year + "</span>";
  }

  message += "</p>";

  document.getElementById("quote-box").innerHTML = message;
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);