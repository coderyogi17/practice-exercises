// Your code here

window.onload= async () =>{
    console.log ("page is fully loaded");
   //create a container for image and header and img
   let imgDiv= document.createElement("div");
   imgDiv.setAttribute(
    "style",
    `display: flex; flex-direction: column; justify-content: center; align-items: center;`
  );
  imgDiv.classList.add("cat_container");
   let imgTitle = document.createElement("h2");
   let img= document.createElement("img");
   imgTitle.innerText = "Kitten Name";
   
  
   

   let { url, width, height } = await fetch(
    "https://api.thecatapi.com/v1/images/search"
  )
  .then((response) => {
    response=response.json();
    console.log(response);
    return response;

})
//     .then((response) => {
//         response=response.text();
//         console.log(response);
//         return response;

// })
//     .then((response) => {
//         response=JSON.parse(response);
//         console.log(response);
//         return response;
//     })
    .then((response) => {
        console.log(response[0]);
        return response[0];
    });
  img.setAttribute("src", url);
  //catImage.setAttribute("width", width);
  //catImage.setAttribute("height", height);

  imgDiv.append(imgTitle, img);
  document.body.appendChild(imgDiv);
};
