console.log("Let's Rock!");

import apiManager from './apiManager.js'

// this gets a reference to song output container element
const songOutputContainer = document.getElementById("songs_container");

// this function:
// clears the output container
// gets all songs from API
// sorts resulting song objects A-Z by title
// .maps over each song object to convert song data to HTML representations
// .forEach song HTML representation, renders them to DOM
function getAndRenderAllSongs() {
  songOutputContainer.innerHTML = ""
  apiManager.getAllSongs().then(songs => {
    songs.sort(sortAZ).map(songToHTML).forEach(renderToDOM)
  })
}


// get and render all songs on initial page load
getAndRenderAllSongs()



// convert one song object to HTML representation
function songToHTML(song) {
  return `
  <div class="song_card">
  <h2>${song.title}</h2>
  <h3>by: ${song.artist}</h3>
  <p>released: ${song.yearReleased}</p>
  </div>
  `
}

// render HTML representation of song to DOM
function renderToDOM(htmlRep) {
  songOutputContainer.innerHTML += htmlRep;
}

// helper function to sort songs alphabetically by title
function sortAZ(a, b) {
  return a.title.localeCompare(b.title)
}



// TODO: add delete button to HTML representation with song Id and delete_btn class
// test
// TODO: add click event listener to songs_container to listen for delete buttons
// test
// TODO: get song Id from button
// test
// TODO: add delete method to API module
// test
// TODO: call delete method in event listener and pass in song Id as argument
// test
// TODO: get all songs and re-render
// test

// TODO: show page with css
// test
// TODO: refactor add event listeners and delete/rerender into separate functions
// test