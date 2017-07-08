/**
 Welcome to my Random Quote Generator project!
* I'm shooting for "Exceeds Expectations."
* I put my quote bank in the quotes.js file to clean things up.
* Thanks for your time!
*/

//Array for storing/recycling quotes once they've been used
var quoteRecycle = [];

// Random Number Generator (number = max)
function randomNumber(number) {
  var rand = Math.floor(Math.random() * (number);
  return rand;
}

// Random Quote Generator - picks quote based on RNG, removes/pushes to recycler
function getRandomQuote() {
  var quoteNumber = randomNumber(quotes.length);
  var pickQuote = quotes[quoteNumber];
  var recycle = quoteRecycle.push(pickQuote);
  quotes.splice(quoteNumber, 1);
  console.log(pickQuote[quote]);
  if (quotes.length === 0) {
    quotes = quoteRecycle;
    quoteRecycle = [];
  }
  return pickQuote;
}

// Random Color Picker - creates random color and assigns it to backgroundColor
function randomColor = {
  var r = randomNumber(256);
  var g = randomNumber(256);
  var b = randomNumber(256);
  var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  document.body.style.backgroundColor = rgb;
}

// Quote Printer - gets a random quote and random color, sends to quote-box
function printQuote = {
  var shownQuote = getRandomQuote();
  var printHTML = '';
  printHTML += '<p class = 'quote'>' + shownQuote[quote] + '</p>';
  printHTML += '<p class = 'source'>' + shownQuote[source];
  if (shownQuote[citation] != null) {
    printHTML += '<span class='citation'>' + shownQuote[citation] + '</span>';
  }
  if (shownQuote[year] != null) {
    printHTML += '<span class='year'>' + shownQuote[year] + '</span>';
  }
  printHTML += '</p>';
  document.getElementById('quote-box').innerHTML = printHTML;
  randomColor();
}

// Quote Refresher - refreshes the quote every 60 seconds
function quoteRefresh() {
  var intervalID = window.setInterval(printQuote, 60000);
}

// Event listener to respond to "Show another quote" button clicks
// When user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

quoteRefresh();
