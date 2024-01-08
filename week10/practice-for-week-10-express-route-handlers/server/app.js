// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

// Your code here
app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});
// Use GET to retrieve a list of all users
app.get('/', (req, res) => {
  //const resp= JSON.stringify(data);
  res.send("THis is a test");
})

// Use GET to retrieve a list of all users
app.get('/artists', (req, res) => {
  //const resp= JSON.stringify(data);
  
  res.json(getAllArtists());
})

app.post('/artists', (req, res) => {
  const resBody = addArtist(req.body);
  res.status(201).json(resBody);
})

//bonus
//GET /artists/latest

app.get("/artists/latest", (req, res) => {
  let latestArtist = getLatestArtist();
  res.status(200).json(latestArtist);
});

// GET /artists/latest/albums
app.get("/artists/latest/albums", (req, res) => {
  let latestArtistAlbums = getAlbumsForLatestArtist();
  res.status(200).json(latestArtistAlbums);
});

//long practice

//GET /artists/:artistId
app.get("/artists/:artistId", (req, res) => {
  res.status(200).json(getArtistByArtistId(req.params.artistId));
});

//PUT or PATCH /artists/:artistId
app.put("/artists/:artistId", (req, res) => {
  let artistId = req.params.artistId;
  let editResult = editArtistByArtistId(artistId, req.body);
  res.json(editResult);
});
app.patch("/artists/:artistId", (req, res) => {
  let artistId = req.params.artistId;
  let editResult = editArtistByArtistId(artistId, req.body);
  res.json(editResult);
});


// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}