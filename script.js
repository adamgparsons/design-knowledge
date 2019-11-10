const quoteTag = document.querySelector("h1");
const randomTag = document.querySelector("img");

const data = ["this is quote 1", "this is quote 2", "this is quote 3"];

const getQuote = function() {
  // get a random quote
  // put it in the site

  const randomNumber = Math.floor(data.length * Math.random());
  quoteTag.innerText = data[randomNumber];
};

// run getQuote
getQuote();

// on click run getQuote
randomTag.addEventListener("click", getQuote);
