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

    const deleteBtns = document.querySelectorAll(".delete_btn")
    deleteBtns.forEach(button => button.addEventListener("click", (event) => {
      console.log("Song Id:", event.target.id)
    }))
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
  <button id="delete--${song.id}" class="delete_btn">delete</button>
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



// TODO: add delete button to HTML representation with ID
// TODO: add click event listeners to all delete buttons


// TODO: add delete method to API module



// TODO: add delete button to HTML representation
// <button id="delete--${song.id}">delete</button>

// TODO: add delete method to API
// deleteSong(songId) {
//   return fetch(`${apiURL}/${songId}`, {
//     method: "DELETE"
//   })
// }

// TODO: add click event listeners to all delete buttons to delete song
// function addEventListenersToDeleteBtns() {
//   const deleteBtns = document.querySelectorAll("button")
//   deleteBtns.forEach(button => button.addEventListener("click", deleteSong))
// }

// TODO: get the ID off the button that was clicked and delete that ID from API
// function deleteSong(event) {
//   const songId = event.target.id.split("--")[1]
//   apiManager.deleteSong(songId)
//     .then(getAndRenderAllSongs)
// }
