const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require('http');
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
server=http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.url);
    let reqBody = '';
    req.on('data', (data) => {
      reqBody += data;
      console.log(reqBody);
    });
  
    req.on('end', () => {
        if(reqBody.length>0){
            req.body = parseBody(reqBody);
        }
      sendFormPage(req,res);
    });
});

const port=5000;
server.listen(port, () => console.log('Server is listening on port', port));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };