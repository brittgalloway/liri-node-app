require("dotenv").config();
const axios = require("axios");

const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);

// concert-this  : seatgeek
// spotify-this-song : spotify
// movie-this : Omdbapi
// do-what-it-says :
//
// MOVIE API ==========================================================
//
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
//
let movie = "Mr. Nobody";
axios
  .get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy")
  .then(function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
    //   * Title of the movie.
    //  * Year the movie came out.
    //  * IMDB Rating of the movie.
    //  * Rotten Tomatoes Rating of the movie.
    //  * Country where the movie was produced.
    //  * Language of the movie.
    //  * Plot of the movie.
    //  * Actors in the movie.
  });
// MUSIC API=========================================================
//
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")
//
let artist = axios
  .get(
    "https://api.seatgeek.com/2/events?performers.slug=" +
      artist +
      "&client_id=<MTg3MDE5NDJ8MTU3MDE2MzI1Mi41OA>"
  )
  .then(function(response) {
    console.log("The artist is " + response.data.artist);
  });
//SPOTIFY=============================================================
//   Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
//====================================================================
// node liri.js do-what-it-says

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.
