const apiURL = "http://localhost:5050/songs"

const apiManager = {
  getAllSongs() {
    return fetch(`${apiURL}`)
      .then(data => data.json())
  }
}

export default apiManager