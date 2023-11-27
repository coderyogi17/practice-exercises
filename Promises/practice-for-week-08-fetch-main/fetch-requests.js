/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here
fetch("/")
    .then(function(res){
        console.log(res.status);
    })





/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

fetch("/")
    .then(function(res){
        if(res.status===200){
        console.log("true");
        }
    })


/* =================== 3. Print the Content-Type Header =================== */

// Your code here

fetch("/")
    .then(function(res){
        console.log(res.headers.get("Content-Type"));
    })




/* ============== 4. Print the body of the response as text =============== */

// Your code here
fetch("/")
  .then(function(res) {
    console.log("response: ", res);
    return res.text();
  })

  /* ============================== Phase 1 ============================== */

// Your code here
const method='POST';
const body="name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery";
const headers={
    "Content-Type": "application/x-www-form-urlencoded"
  }

  fetch('/products',{
    method,
    body,
    headers
  });

  // Your code here

let result = await fetch("/products", {
    method:"POST",
    headers: {
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:"name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
});
console.log(result.status);
console.log(result.headers.get("Content-Type"));
console.log(result.url);
console.log(result.redirected);

//is redirecting but status code is 200, should be 302
/* ============================== Phase 3 ============================== */

// Your code here
 result = await fetch("/products", {
    method:"POST",
    headers: {
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:new URLSearchParams({
        name: "Caribbean Delight Coffee",
        description: "Made by Manatee Coffee",
        price: 11.99,
        categories: "grocery"
      })
});