require("dotenv").config();
const axios = require("axios");

const keys = require("./keys.js");
// const spotify = new Spotify(keys.spotify);
const spotify = require("node-spotify-api");

//
// MOVIE API ==========================================================
//
if (process.argv[2] == "movie-this") {
  let movie = process.argv[3];
  axios
    .get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy")
    .then(function(response) {
      console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMBD rating: " + response.data.imdbRating);
      console.log("Rotten Tomatos: " + response.data.Ratings[1].Value);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors/Actresses: " + response.data.Actors);
    });
}
// MUSIC API=========================================================

if (process.argv[2] == "concert-this") {
  let artist = process.argv[3];
  axios
    .get(
      "https://api.seatgeek.com/2/events?performers.slug=" +
        artist +
        "&client_id=MTg3MDE5NDJ8MTU3MDI0NzEzOC40Ng"
    )
    .then(function(response) {
      // console.log(response.data.venue.location);
      console.log("Venue: " + response.data.events[0].venue.name);
      console.log(
        "Location: " + response.data.events[0].venue.display_location
      );
      // Date of the Event (use moment to format this as "MM/DD/YYYY")
      console.log("Date: " + response.data.events[0].datetime_utc);
      // console.log(response.data);
    });
}
//SPOTIFY=============================================================
//   Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
if (process.argv[2] == "spotify-this-song") {
  spotify.search({ type: "track", query: "All the Small Things" }, function(
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data);
  });
}
//====================================================================
// node liri.js do-what-it-says

// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.
if (process.argv[2] == "do-what-it-says") {
}
