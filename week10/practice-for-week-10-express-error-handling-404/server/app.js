const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

//resource not found 
app.use(( req, res, next) =>{
  let err = new Error("Sorry, the requested resource couldn't be found")
  err.statusCode = 404
  throw err
})


app.use((err, req, res, next) =>{

  res.json({
    message: err.message,
    statusCode: err.statusCode,
    stack: err.stack
  })
})


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));