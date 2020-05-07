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