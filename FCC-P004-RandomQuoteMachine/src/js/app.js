// random range, [min, max]
const randomNumInRange = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// get a random quote
const getRandomQuote = function(arr) {
  let len = arr.length;
  let index = randomNumInRange(0, len - 1);
  return arr[index];
};

// show the random quote
const randomQuote = function() {
  // Using the core $.ajax() method
  $.ajax({
    headers: {
      Accept: "application/json"
    },
    url:
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    success: function(jsonQuotes) {
      if (typeof jsonQuotes === "string") {
        let quotesData = JSON.parse(jsonQuotes);
        let quotesArray = quotesData["quotes"];
        let randomQuote = getRandomQuote(quotesArray);
        let quoteContent = randomQuote.quote;
        let quoteAuthor = randomQuote.author;
        $("#text").html(quoteContent);
        $("#author").html(quoteAuthor);
      }
    }
  })
};

const getRandomKeyword = function() {
  let keywordsArr = ["world", "nature", "mountain", "water", "sea", "flower", "tree", "animal", "people"];
  let len = keywordsArr.length;
  let index = randomNumInRange(0, len - 1);
  return keywordsArr[index];
}

const updateImgSrc = function() {
  let url = "https://source.unsplash.com/800x400/?" + getRandomKeyword();
  $("#image").attr("src",url);
}

$(document).ready(function() {
  updateImgSrc();
  randomQuote();
  setInterval(updateImgSrc, 10000);
  $("#new-quote").click(function() {
    randomQuote();
  })
});
