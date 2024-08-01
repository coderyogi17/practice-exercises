//instantiate express and the application

const express = require('express');
const app = express();
const path = require('path');




//express using json
app.use(express.json());
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

//phase 2
app.use("/",express.static("tic-tac-toe.js"))

//get method
app.get('/',(req,res)=>{
    const ext = path.extname(req.url);
    res.sendFile(`${publicPath}/index.html`)
    // res.statusCode = 200;
    //     if (ext === ".jpg" || ext === ".jpeg") {
    //       res.set("Content-Type", "image/jpeg");
    //     } else if (ext === ".css") {
    //       res.set("Content-Type", "text/css");          
    //     } else if (ext === ".js") {
    //       res.set("Content-Type", "text/javascript");
         

    //     }
});

const port = process.env.PORT || 5000;

// sendFile will go here

app.listen(port);
console.log('Server started at http://localhost:' + port);