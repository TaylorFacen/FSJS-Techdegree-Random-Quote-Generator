/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Flag for loop
var inLoop = true
var loopInterval = null;
var buttons = document.getElementsByClassName('button');

var quotes = [
  {
    quote: "While we may not always have control over our options, we always have control over how we choose among them.",
    source: "Greg McKeown",
    citation: "Essentialism",
    year: 2014,
    tags: ["wisdom", "book"]
  },
  {
    quote: "Mindfulness is simply the art of deliberately doing one thing at a time.",
    source: "Chris Baily",
    citation: "The Productivity Project",
    year: 2016,
    tags: ["wisdom", "book"]
  },
  {
    quote: "We must have faith in God's timing, especially when it's scary. We must have faith in the process.",
    source: "Valeisha Butterfield Jones",
    citation: "The Girlprint",
    year: 2014,
    tags: ["wisdom", "blackWoman", "book"]
  },
  {
    quote: "Our thoughts become our words, out words become our beliefs, our beliefs become our actions, our actions become our habits, and our habits beccome our realities.",
    source: "Jen Sincero",
    citation: "You are a Badass",
    year: 2013,
    tags: ["wisdom", "book"]
  },
  {
    quote: "Everyone on earth carries around an unseen history, and that alone deserves some tolerance.",
    source: "Michelle Obama",
    citation: "Becoming",
    year: 2018,
    tags: ["wisdom", "blackWoman", "book"]
  }
]

var tagsMapping = {
  "wisdom": "🤔",
  "blackWoman": "👩🏽",
  "book": "📚" 
}

var colors = [
  "#50514f",
  "#11091e",
  "#9777ff",
  "#edc9d5"
]

function getRandomNumber(ceiling) {
  var randomNumber = Math.floor(Math.random() * ceiling)
  return randomNumber
}

function getRandomItem(array) {
  var index = getRandomNumber(array.length);
  var item = array[index];
  return item
}

function getRandomQuote(quotes) {
  var quote = getRandomItem(quotes)
  return quote
}

function getRandomColor(colors) {
  var color = getRandomItem(colors)
  return color
}

function printQuote() {
  var randomQuote = getRandomQuote(quotes);

  // Make sure the new quote isn't the same as the old quote
  var currentQuote = document.getElementsByClassName('quote')[0]
  while (randomQuote.quote.innerText === currentQuote) {
    randomQuote = getRandomQuote(quotes);
  }
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

  if (randomQuote.tags.length > 0) {
    var tagsHTML = "<p>Tags: ";
    for (var i = 0; i < randomQuote.tags.length; i++) {
      tagsHTML += tagsMapping[randomQuote.tags[i]] + " "
    }
    message += tagsHTML + "</p>"
  }

  document.getElementById("quote-box").innerHTML = message;

  // Change background color of page and buttons
  var newBackgroundColor = getRandomColor(colors);

  document.body.style.backgroundColor = newBackgroundColor;

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.background = newBackgroundColor;
  }

}

// Function from: https://stackoverflow.com/questions/10935026/how-to-clear-interval-and-set-it-again

function manageLoop() {
  if (inLoop) {
    loopInterval = setInterval(printQuote, 20000)
  } else {
    clearInterval(loopInterval);
  }
}

function switchLoopInterval() {
  var startStopButton = document.getElementById('startStopLoop');
  inLoop = !inLoop;
  if (inLoop) {
    startStopButton.innerText = "Pause"
  } else {
    startStopButton.innerText = "Start"
  }
  manageLoop()
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('startStopLoop').addEventListener("click", switchLoopInterval, false);
manageLoop()