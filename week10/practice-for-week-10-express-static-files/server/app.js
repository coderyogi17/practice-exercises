const express = require('express');
const app = express();
// Your code here
//phase 1
// app.use(express.static("assets"))

//phase 2
app.use("/",express.static("assets/scripts"))

//phase 3
//app.use("/stylesheets", express.static("assets/css"))
//Bonus phase
app.use("/stickers", express.static("assets/images"));
//path should be http://localhost:5000/stickers/hello.png since we're defining /stickers as the relative root path for the browser to grab files for


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));