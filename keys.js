console.log("this is loaded");

const keys = require("./keys.js");
exports.spotify = {
  id: SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
