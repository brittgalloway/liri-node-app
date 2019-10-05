// Required npms===============================
require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const moment = require("moment");
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
//Variales======================================
const spotify = new Spotify(keys.spotifyKeys);

let request = process.argv[2];
let query = process.argv[3];
//function for spotify=====================================================
function spotifySongInfo() {
  spotify.search({ type: "track", query: query }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log("Song: " + data.tracks.items[0].name);
    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);

    console.log(
      "Preview Song: " + data.tracks.items[0].album.external_urls.spotify
    );
    console.log("Album Name: " + data.tracks.items[0].album.name);
  });
}
//function for concert========================================
function concertVenue() {
  let artist = query;
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
      console.log(
        "Date: " +
          moment().format("MM/DD/YYYY", response.data.events[0].datetime_utc)
      );
    });
}
//function for movie====================================
function movieInfo() {
  let movie = query;
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

//=DO WHAT IT SAYS===================================================================
if (request == "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }

    const dataArr = data.split(",");
    request = dataArr[0];
    query = dataArr[1];
    console.log(dataArr);
    spotifySongInfo();
  });
}
//SPOTIFY=============================================================

if (request == "spotify-this-song") {
  spotifySongInfo();
}

// MOVIE API ==========================================================
//
if (request == "movie-this") {
  movieInfo();
}
// MUSIC API=========================================================

if (request == "concert-this") {
  concertVenue();
}
