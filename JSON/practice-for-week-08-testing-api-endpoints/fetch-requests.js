/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "message": "BYE SAM!"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'manual'
};

fetch("/posts", requestOptions)
  .then(response => response.json())
  .then(resBody => console.log(resBody))
  .catch(error => console.log('error', error));

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
fetch('/post', {
  method: 'POST',
  headers: {
    'Content-Type' : 'application/json'
  },
  body: JSON.stringify({
    message: 'New Post!'
  })
})
.then(res => res.json())
.then(resBody => console.log(resBody))
.catch(error => console.log('error', error))