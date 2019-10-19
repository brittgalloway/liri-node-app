# liri-node-app

LIRI is a CLI App that finds infomation on song titles via Spotify, an artist's concert via Seat Geek, and find information on a movie title via OMDB.
With this app you can searh your favorite song, find the artist name, then look for a concert date and location. Or you can learn the stats of your favorite (maybe least favorite?) movie.

## Technologies

node.js
Node-Spotify-API
Axios
OMDB API
SeatGeek API
Moment(via npm)
DotEnv

## How To Use Liri

You can serch for 3 things. A song, a concert, or a movie.

## Song Titles

To search a song, you must type: spotify-this-song + songTitle
EXAMPLE
spotify-this-song Humble

For mulity word song title Please use quotes
EXAMPLE
spotify-this-song "On Top of the World"

You will get this output:

     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

## Concerts

To search for a concert, you must type: concert-this + artistName
EXAMPLE
concert-this Yuna

You will get this output:

     * Name of the venue
     * Venue location
     * Date of the Event

## Movies

To search for a movie, you must type: movie-this + movieTitle
EXAMPLE
movie-this Big

You will get this output:

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

If you don't know what to search for, you can type: do-what-it-says
This will read the text in a file and search the contents for you.
The output will mimic which ever call it makes.

## App in Action

https://drive.google.com/file/d/1gK4BKpMOlneK5OPnHKDC6IxU3yHYloHo/view
