const bodyTag = document.querySelector("body");
const quoteTag = document.querySelector("h1");
const authorTag = document.querySelector("p");
const randomTag = document.querySelector("img");

// let data = [];

// fetch from an api
// then when there is a response
// take that response and turn it into a JSON
// then when that is done, make data = json
// then get quote
// fetch("https://api.superhi.com/api/test/quotes/")
//   .then(response => response.json())
//   .then(jsonData => {
//     data = jsonData;
//     // run getQuote
//     getQuote();
//   });

const getQuote = function() {
  fetch("https://api.superhi.com/api/test/quotes/random")
    .then(response => response.json())
    .then(jsonData => {
      quoteTag.innerHTML = `&ldquo;${jsonData.quote}&rdquo;`;
      authorTag.innerText = `-${jsonData.author}`;
      if (jsonData.quote.length > 100) {
        quoteTag.classList.add("long");
      } else {
        quoteTag.classList.remove("long");
      }
      bodyTag.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 90%)`;
    });

  // if (randomQuote.length > 0) {
  //   console.log("hello");
  // }

  // if (data.length > 0) {
  //   // get a random quote
  //   const randomNumber = Math.floor(data.length * Math.random());
  //   const randomQuote = data[randomNumber];

  //   // put it in the site
  //   quoteTag.innerText = randomQuote.quote;
  //   authorTag.innerText = randomQuote.author;
  // }
};

getQuote();
// on click run getQuote
randomTag.addEventListener("click", getQuote);
