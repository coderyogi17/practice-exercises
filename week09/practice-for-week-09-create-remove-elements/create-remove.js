/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        let newArr= url.split("/");
        let breed= newArr[4];


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here

        let listItem = document.createElement("li");
        let figure = document.createElement("figure");
        let image = document.createElement("img");
        let figcaption = document.createElement("figcaption");
    
        //set figcaption text
        figcaption.innerText = breed;
    
        //set src of img
        image.setAttribute("src", url);
    
        //append to figure
        figure.appendChild(image);
        figure.appendChild(figcaption);
        //append figure to listitem
        listItem.appendChild(figure);
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
    
        //get gallery section, append to section
        let gallery = document.querySelector("section.gallery ul");
        gallery.appendChild(listItem);
      } catch (e) {
        console.log(e);
        console.log("Couldn't fetch dog :(");
      }
    });
    


        
/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  let firstCard = document.querySelector("section.gallery ul > li");
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  if (firstCard) {
    firstCard.remove();
  }
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  let cardArr = Array.from(
    document.querySelectorAll("section.gallery ul > li")
  );
  let lastCard = cardArr[cardArr.length - 1];
  // let lastCard =document.querySelector("section.gallery > ul > li:last-of-type")
  /*-------------------- Remove the last dog card ----------------------- */
  if (lastCard) {
    lastCard.remove();
  }
  // Your code here
});