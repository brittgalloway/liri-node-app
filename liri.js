require("dotenv").config();
const axios = require("axios");

const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);

// BANDS IN TOWN API====================================================
// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp" ??
// let band = userInput;
// const queryURL =
//   "https://rest.bandsintown.com/artists/" + band + "?app_id=trilogy";

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });
// MOVIE API ==========================================================
let movie = "Mr. Nobody";
axios
  .get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy")
  .then(function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  });
